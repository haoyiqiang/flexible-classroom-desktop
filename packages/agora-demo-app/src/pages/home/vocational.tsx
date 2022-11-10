import { roomApi } from '@app/api';
import { GlobalStoreContext } from '@app/stores';
import { GlobalLaunchOption, ToastType } from '@app/stores/global';
import {
  REACT_APP_AGORA_APP_CERTIFICATE,
  REACT_APP_AGORA_APP_ID,
  REACT_APP_AGORA_APP_SDK_DOMAIN,
} from '@app/utils';
import { courseware } from '@app/utils/courseware';
import { LanguageEnum, FcrMultiThemeMode, applyTheme, loadGeneratedFiles, themes } from 'agora-classroom-sdk';
import { RtmRole, RtmTokenBuilder } from 'agora-access-token';
import {
  EduClassroomConfig,
  EduRegion,
  EduRoleTypeEnum,
  EduRoomServiceTypeEnum,
  EduRoomTypeEnum,
} from 'agora-edu-core';
import { AgoraLatencyLevel } from 'agora-rte-sdk';
import dayjs from 'dayjs';
import md5 from 'js-md5';
import { observer } from 'mobx-react';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useHistory } from 'react-router';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 as uuidv4 } from 'uuid';
import { Toast, transI18n } from '~ui-kit';
import { Home } from '~ui-kit/scaffold';
import { HomeSettingContainer } from './home-setting';
import { MessageDialog } from './message-dialog';

declare const BUILD_TIME: string;
declare const BUILD_COMMIT_ID: string;
declare const CLASSROOM_SDK_VERSION: string;


const SCENARIOS_ROOM_SUBTYPE_MAP: { [key: string]: number } = {
  'vocational-class': 1,
  'big-class': 0,
  '1v1': 0,
  'mid-class': 0,
};

const SCENARIOS_ROOM_SERVICETYPE_MAP: { [key: string]: EduRoomServiceTypeEnum } = {
  'premium-service': EduRoomServiceTypeEnum.LivePremium,
  'standard-service': EduRoomServiceTypeEnum.LiveStandard,
  'latency-service': EduRoomServiceTypeEnum.CDN,
  'mix-service': EduRoomServiceTypeEnum.Fusion,
  'mix-stream-cdn-service': EduRoomServiceTypeEnum.MixStreamCDN,
  'hosting-scene': EduRoomServiceTypeEnum.HostingScene,
};

export const webRTCCodecH264 = [
  EduRoomServiceTypeEnum.CDN,
  EduRoomServiceTypeEnum.Fusion,
  EduRoomServiceTypeEnum.MixStreamCDN,
  EduRoomServiceTypeEnum.HostingScene,
];

// 1. 伪直播场景不需要pretest
// 2. 合流转推场景下的学生角色不需要pretest
export const vocationalNeedPreset = (
  roleType: EduRoleTypeEnum,
  roomServiceType: EduRoomServiceTypeEnum,
) => {
  return !(
    roomServiceType === EduRoomServiceTypeEnum.HostingScene ||
    (roomServiceType === EduRoomServiceTypeEnum.MixStreamCDN &&
      roleType !== EduRoleTypeEnum.teacher)
  );
};
export const useTheme = () => {
  useEffect(() => {
    loadGeneratedFiles();
    const theme = themes['default'][FcrMultiThemeMode.light];
    applyTheme(theme);
  }, []);
};
export const VocationalHomePage = observer(() => {
  const globalStore = useContext(GlobalStoreContext);
  useTheme();
  const { launchConfig, language, region } = globalStore;
  const [roomId, setRoomId] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [roomName, setRoomName] = useState<string>(launchConfig.roomName || '');
  const [userName, setUserName] = useState<string>(launchConfig.userName || '');
  const [userRole, setRole] = useState<string>('student');
  const [curScenario, setScenario] = useState<string>('vocational-class');
  const [curService, setService] = useState<string>('latency-service');
  const [duration, setDuration] = useState<number>(30);
  const [encryptionMode, setEncryptionMode] = useState<string>('');
  const [encryptionKey, setEncryptionKey] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const onChangeRegion = (r: string) => { };
  const onChangeLanguage = (language: string) => { };
  const role = useMemo(() => {
    const roles = {
      teacher: EduRoleTypeEnum.teacher,
      assistant: EduRoleTypeEnum.assistant,
      student: EduRoleTypeEnum.student,
      incognito: EduRoleTypeEnum.invisible,
    };
    return roles[userRole];
  }, [userRole]);

  const scenario = useMemo(() => {
    const scenes = {
      '1v1': EduRoomTypeEnum.Room1v1Class,
      'mid-class': EduRoomTypeEnum.RoomSmallClass,
      'big-class': EduRoomTypeEnum.RoomBigClass,
      'vocational-class': EduRoomTypeEnum.RoomBigClass,
    };
    return scenes[curScenario];
  }, [curScenario]);

  const roomSubtype = SCENARIOS_ROOM_SUBTYPE_MAP[curScenario];

  const userUuid = useMemo(() => {
    return `${md5(userName)}${userRole}`;
  }, [role, userName, userId]);

  const roomUuid = useMemo(() => {
    return `${md5(roomName)}${scenario}`;
  }, [scenario, roomName, roomId]);

  const onChangeRole = (value: string) => {
    setRole(value);
  };

  const onChangeScenario = (value: string) => {
    setScenario(value);
  };

  const onChangeService = (value?: string) => {
    if (value) {
      setService(value);
    }
  };

  const text: Record<string, CallableFunction> = {
    roomId: setRoomId,
    userName: setUserName,
    roomName: setRoomName,
    userId: setUserId,
    encryptionMode: setEncryptionMode,
    encryptionKey: setEncryptionKey,
  };

  const onChangeRoomId = (newValue: string) => {
    text['roomId'](newValue);
  };

  const onChangeUserId = (newValue: string) => {
    text['userId'](newValue);
  };

  const onChangeRoomName = (newValue: string) => {
    text['roomName'](newValue);
  };

  const onChangeUserName = (newValue: string) => {
    text['userName'](newValue);
  };

  const onChangeEncryptionMode = (newValue: string) => {
    text['encryptionMode'](newValue);
  };

  const onChangeEncryptionKey = (newValue: string) => {
    text['encryptionKey'](newValue);
  };

  const history = useHistory();

  const [courseWareList] = useState(courseware.getList());

  const buildTime = dayjs(+BUILD_TIME || 0).format('YYYY-MM-DD HH:mm:ss');

  const commitID = BUILD_COMMIT_ID;

  const onSubmit = async () => {
    try {
      setLoading(true);
      const domain = `${REACT_APP_AGORA_APP_SDK_DOMAIN}`;

      const { token, appId } = await await roomApi.getCredentialNoAuth({
        userUuid,
        roomUuid,
        role,
      });

      console.log('## get rtm Token from demo server', token);
      const roomServiceType = SCENARIOS_ROOM_SERVICETYPE_MAP[curService];
      const webRTCCodec = webRTCCodecH264.includes(roomServiceType) ? 'h264' : 'vp8';
      const latencyLevel =
        roomServiceType === EduRoomServiceTypeEnum.LivePremium
          ? AgoraLatencyLevel.UltraLow
          : AgoraLatencyLevel.Low;
      const needPretest = vocationalNeedPreset(role, roomServiceType);

      const config: GlobalLaunchOption = {
        appId,
        sdkDomain: domain,
        pretest: needPretest,
        courseWareList: courseWareList.slice(0, 1),
        language: language as LanguageEnum,
        userUuid: `${userUuid}`,
        rtmToken: token,
        roomUuid: `${roomUuid}`,
        roomType: scenario,
        roomServiceType,
        roomName: `${roomName}`,
        userName: userName,
        roleType: role,
        region: region as EduRegion,
        duration: duration * 60,
        latencyLevel,
        mediaOptions: {
          web: {
            codec: webRTCCodec,
          },
        },
      };

      config.appId = REACT_APP_AGORA_APP_ID || config.appId;
      // this is for DEBUG PURPOSE only. please do not store certificate in client, it's not safe.
      // 此处仅为开发调试使用, token应该通过服务端生成, 请确保不要把证书保存在客户端
      if (REACT_APP_AGORA_APP_CERTIFICATE) {
        config.rtmToken = RtmTokenBuilder.buildToken(
          config.appId,
          REACT_APP_AGORA_APP_CERTIFICATE,
          config.userUuid,
          RtmRole.Rtm_User,
          0,
        );

        console.log(`## build rtm Token ${config.rtmToken} by using RtmTokenBuilder`);
      }

      if (encryptionKey && encryptionMode) {
        config.mediaOptions = {
          ...config.mediaOptions,
          encryptionConfig: {
            key: encryptionKey,
            mode: parseInt(encryptionMode),
          },
        };
      }
      globalStore.setLaunchConfig(config);
      history.push('/launch');
    } catch (e) {
      globalStore.addToast({
        id: uuidv4(),
        desc:
          (e as Error).message === 'Network Error'
            ? transI18n('home.network_error')
            : (e as Error).message,
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

  return !!language ? (
    <React.Fragment>
      <MessageDialog />
      <Home
        showServiceOptions={true}
        isVocational={true}
        version={CLASSROOM_SDK_VERSION}
        SDKVersion={EduClassroomConfig.getRtcVersion()}
        buildTime={buildTime}
        commitID={commitID}
        roomId={roomUuid}
        userId={userUuid}
        roomName={roomName}
        userName={userName}
        role={userRole}
        scenario={curScenario}
        service={curService}
        duration={duration}
        region={region as string}
        language={language as string}
        onChangeRegion={onChangeRegion}
        onChangeLanguage={onChangeLanguage}
        encryptionMode={encryptionMode}
        encryptionKey={encryptionKey}
        onChangeEncryptionMode={onChangeEncryptionMode}
        onChangeEncryptionKey={onChangeEncryptionKey}
        onChangeRole={onChangeRole}
        onChangeScenario={onChangeScenario}
        onChangeService={onChangeService}
        onChangeRoomId={onChangeRoomId}
        onChangeUserId={onChangeUserId}
        onChangeRoomName={onChangeRoomName}
        onChangeUserName={onChangeUserName}
        onChangeDuration={(duration: number) => {
          setDuration(duration);
        }}
        loading={loading}
        onClick={onSubmit}
        headerRight={<HomeSettingContainer />}>
        <HomeToastContainer />
      </Home>
    </React.Fragment>
  ) : null;
});

const HomeToastContainer: React.FC = observer(() => {
  const { toastList, removeToast } = useContext(GlobalStoreContext);
  return (
    <TransitionGroup style={{ justifyContent: 'center', display: 'flex' }}>
      {toastList.map((value: ToastType, idx: number) => (
        <CSSTransition classNames="toast-animation" timeout={1000} key={`${value.id}`}>
          <Toast
            style={{ position: 'absolute', top: 50 * (idx + 1), zIndex: 9999 }}
            type={value.type}
            closeToast={() => {
              removeToast(value.id);
            }}>
            {value.desc}
          </Toast>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
});