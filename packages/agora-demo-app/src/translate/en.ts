import { ErrorCode, ErrorCodeMessage } from '@app/utils/error';

export default {
  fcr_loading: 'Loading...',
  home_product_name: 'Flexible Classroom',
  home_greeting: 'Welcome Back',
  home_form_field_room_id: 'Room ID',
  home_form_field_room: 'Room',
  home_form_field_chat: 'ChatGroup',
  home_form_field_name: 'Name',
  home_form_field_user_id: 'UserID',
  home_form_field_role: 'Role',
  home_form_field_type: 'Type',
  home_form_field_duration: 'Duration',
  home_form_submit: 'ENTER',
  home_form_placeholder_room_id: 'Please input room ID',
  home_form_placeholder_user_id: 'Please input user ID',
  home_form_placeholder_room_name: 'Please input room name',
  home_form_placeholder_user_name: 'Please input your name',
  home_form_placeholder_chat_group: 'Please input chat group',
  home_form_placeholder_user_role: 'Please select',
  home_form_placeholder_room_type: 'Please select class type',
  home_form_error_room_name_empty: 'Room name is required',
  home_form_error_user_name_empty: 'User name is required',
  home_form_error_role_type_empty: 'Role type is required',
  home_form_error_room_type_empty: 'Room type is required',
  home_form_error_room_id_limit: ' {min} digits required',
  home_form_error_room_name_limit: 'Between {min} and {max} characters',
  home_form_error_chat_group_illegal: 'chat group {text} illegal',
  home_form_error_user_name_limit: 'Between {min} and {max} characters',
  fcr_home_label_room_list_no_more: 'It is all, nothing more 🤐',
  fcr_logout_tips: 'The user account has expired, please login again later',
  fcr_join_room_tips_ui_config_not_ready: 'UI config be not ready',
  fcr_join_room_tips_user_id_empty: "User'id can't be empty",
  fcr_join_room_tips_user_name_empty: "User'name can't be empty",
  fcr_h5_invite_room_share_link_error: 'Invalid share link',
  fcr_menu_sign_out: 'Sign Out',
  fcr_menu_sign_in: 'Sign In',
  fcr_h5_invite_hello: 'HELLO!',
  fcr_create_tips_time_validate: 'Choose time must be greater than the current time',
  fcr_create_tips_room_name: 'Please Input Room Name',
  fcr_create_more_settings_expand: 'Expand',
  fcr_create_room_current_time: 'Current Time',
  fcr_create_label_latency_type: 'Service Type',
  fcr_create_tips_room_playback_link: 'Please input your playbacks link',
  fcr_create_room_tips_name_rule:
    'Please input letters, Numbers, Chinese character or the underscore',
  fcr_join_room_option_audience: 'Audience',
  fcr_join_room_label_role: 'Role',
  fcr_join_room_tips_room_id: 'Please Input Room ID',
  fcr_join_room_button_join: 'Join Now',
  fcr_join_room_tips_room_id_empty: 'Room ID cannot be empty and must be numeric',
  fcr_share_tips_copy_all_fault: 'Copy room information failure',
  fcr_share_tips_copy_id_fault: 'Copy room id failure',
  fcr_share_tips_copy_all_success: 'Room information has been copied to the clip',
  fcr_share_tips_copy_id_success: 'Room id has been copied to the clip',
  fcr_api_tips_fetch_room_info_failed:
    'Failed to get the room information.Please refresh the page or try again later.',

  // 2.8.0分割线
  fcr_create_label_room_name_empty: 'The Room Name cannot  be empty',
  fcr_create_tips_starttime: 'The class start time must be later than the current time',
  fcr_create_tips_endtime_too_early: 'The class end time must be later than the start time',
  fcr_create_tips_duration_too_short: 'Duration must be greater than or equal to 15 minutes',
  fcr_share_label_copy_invitation: 'You can copy Invitation and send to attendees',
  fcr_industry_option_education: 'Education',
  fcr_industry_option_entertainment: 'Entertainment',
  fcr_home_label_slogan: 'Build Online Classroom in Minutes',
  fcr_home_label_welcome_message: 'Welcome to Flexible Classroom ',
  fcr_home_label_logo: 'Flexible Classroom',
  fcr_home_label_roomlist: 'My Room List',
  fcr_home_label_small_classroom: 'Small Classroom ',
  fcr_home_label_lecture_hall: 'Lecture Hall ',
  fcr_home_label_proctoring: 'Online Proctoring',
  fcr_home_label_1on1: '1-on-1 ',
  fcr_home_label_onlineclass: 'Online Classroom ',
  fcr_home_button_create: 'Create',
  fcr_home_button_join: 'Join',
  fcr_home_button_enter: 'Enter',
  fcr_home_button_replay: 'Detail',
  fcr_home_status_upcoming: 'upcoming',
  fcr_home_status_live: 'Live',
  fcr_home_status_over: 'Closed',
  fcr_home_form_time: '2022-08-12,12:00-16:00',
  fcr_create_label_create_classroom: 'Create Classroom',
  fcr_create_label_room_name: 'Room Name ',
  fcr_create_label_room_name_default: "{name}'s Room",
  fcr_create_label_starttime: 'StartTime',
  fcr_create_label_end_time: 'EndTime',
  fcr_create_label_class_mode: 'Class Mode',
  fcr_create_label_more_settings: 'More Settings',
  fcr_create_label_security: 'Security',
  fcr_create_label_1on1_description:
    'Suitable for 1-on-1 teaching scenario, Teacher and Student can talk directly face to face .',
  fcr_create_label_small_onlineclass_description:
    'New interactive teaching scenarios with a small number of people',
  fcr_create_label_small_classroom_description:
    'Suitable for interactive teaching scenarios with a small number of people, Teacher and students could talk at any time ',
  fcr_create_label_lecture_hall_description:
    'Suitable for one-way live broadcast scenario with a large number of people,Students need to request for joining the video chat.',
  fcr_create_label_service_type_RTC: 'Interactive Premium',
  fcr_create_label_service_type_Standard: 'Interactive Standard',
  fcr_create_label_service_type_CDN: 'Fusion CDN',
  fcr_create_label_latency_RTC: '< 400ms latency',
  fcr_create_label_latency_Standard: '1500ms latency',
  fcr_create_label_latency_CDN: '6000ms latency',
  fcr_create_label_watermark: 'Watermark',
  fcr_create_label_playback: 'Live & Playback',
  fcr_create_label_playback_description: 'Use video playback for live broadcast',
  fcr_create_label_playback_link: "Playback's link",
  fcr_create_label_default_time: 'Default 30mins',
  fcr_h5create_label_small_classroom: 'Small Classroom',
  fcr_h5create_label_lecture_hall: 'Lecture Hall',
  fcr_h5create_label_1on1: '1 on 1',
  fcr_h5create_label_small_onlineclass: 'Online Classroom',
  fcr_h5create_label_interactive: 'interactive',
  fcr_h5create_label_broadcast: 'broadcast',
  fcr_create_tips_create_success: 'You have created a room successfully',
  fcr_create_tips_create_failed: 'Failed to create the classroom',
  fcr_create_tips_playback_link: 'Please input the url of the playback',
  fcr_create_tips_playback_create_fail:
    'Live&Playback Classroom could not be create without an playback url',
  fcr_create_option_time_selector_Mon: 'Mon',
  fcr_create_option_time_selector_Tue: 'Tue',
  fcr_create_option_time_selector_Wed: 'Wed',
  fcr_create_option_time_selector_Thu: 'Thu',
  fcr_create_option_time_selector_Fri: 'Fri',
  fcr_create_option_time_selector_Sat: 'Sat',
  fcr_create_option_time_selector_Sun: 'Sun',
  fcr_create_button_create: 'Create',
  fcr_create_button_cancel: 'Cancel',
  fcr_share_label_room_id: 'Room ID',
  fcr_share_label_invitation:
    '邰伦裕 invites you to a classroomRoom : room nameTime: Click the link to join the room or to add it to your room list:URLOr copy the room ID to join the room :529-130-649',
  fcr_share_button_: 'Copy All',
  fcr_create_button_: 'Copy Room ID and Link',
  fcr_share_modal_label_room_name: "xxx's classroom",
  fcr_share_modal_label_room_id: 'Room ID',
  fcr_share_modal_button_share: 'share',
  fcr_join_room_label_join: 'Join Room',
  fcr_join_room_label_RoomID: 'Room ID',
  fcr_join_room_label_name: 'Your Name',
  fcr_join_room_option_teacher: 'Teacher',
  fcr_join_room_option_student: 'Student',
  fcr_join_room_button_confirm: 'Join',
  fcr_join_room_button_cancel: 'Cancel',
  fcr_join_room_tips_name: 'Please input your name ',
  fcr_join_room_tips_empty_id: "The Room ID doesn't exist",
  fcr_join_room_tips_small_classroom: 'Small Classroom is not supported by now ',
  fcr_join_room_tips_1on1: '1 on 1 is not supported by now ',
  fcr_join_room_tips_role: 'Role Teacher is not supported on HTML5',
  fcr_share_link_label_welcome: 'Welcome to Flexible Classroom ',
  fcr_share_link_label_slogon: 'Flexible classroom',
  fcr_share_link_label_invitation: 'invite you to attend ',
  fcr_share_link_form_time: '13:10-13:40 2022-02-02   2022-02-02',
  fcr_share_link_tips_room_id: 'Room ID has been copied',
  fcr_share_h5_tips_class_mode: 'Only lecture hall is supported on HTML5',
  fcr_share_h5_tips_role_teacher: 'Role Teacher is not supported on HTML5',
  fcr_share_link_tips_name: 'Please input your name ',
  fcr_past_label_past_classroom: 'Class history',
  fcr_past_label_room_ID: 'Room ID',
  fcr_past_label_type: 'Type',
  fcr_past_label_type_no_history: 'No class history',
  fcr_past_label_time: 'Time',
  fcr_past_label_record: 'Record',
  fcr_past_label_record_processing: 'Processing the recording',
  fcr_past_label_not_recorded: 'Not recorded',
  fcr_past_link_Replay: 'Replay',
  fcr_past_link_attendance_tracking: 'Sample code',
  fcr_past_link_engagement_tracking: 'Sample code',
  fcr_past_tips_room_id: 'Please input room ID',
  fcr_past_button_query: 'Query',
  fcr_past_table_attendance_tracking_title: 'Attendance tracking',
  fcr_past_table_engagement_tracking_title: 'Engagement tracking',
  fcr_past_table_column_student_name: 'Student name',
  fcr_past_table_column_joined_time: 'Joined time',
  fcr_past_table_column_time_in_class: 'Time in class',
  fcr_past_table_column_raise_hand: 'Raise hands',
  fcr_past_table_column_correc: 'Correct answers',
  fcr_past_table_column_incorrect: 'Incorrect answers',
  fcr_past_table_column_Polling: 'Polling',
  fcr_past_table_column_reward: 'Reward',
  //补充
  [ErrorCodeMessage[ErrorCode.NETWORK_DISABLE]]:
    'Network connection error, please try again later.',
  [ErrorCodeMessage[ErrorCode.COURSE_HAS_ENDED]]: 'The course has ended',
  [ErrorCodeMessage[ErrorCode.INVALID_ROOM_ID]]: 'Room ID is invalid',
  [ErrorCodeMessage[ErrorCode.INVALID_ROOM_INFO]]: 'Invalid room info',
  [ErrorCodeMessage[ErrorCode.ROOM_IS_ENDED]]: 'The current room live has ended',
  [ErrorCodeMessage[ErrorCode.INVALID_CLASS_MODE_H5]]: 'Only lecture hall is supported on HTML5',
  [ErrorCodeMessage[ErrorCode.INVALID_SCENE_MODE_ELECTRON]]: 'Cloud Classroom is not supported on Electron',

  /** Home Settings*/
  fcr_settings_setting: 'Settings',
  fcr_settings_option_general: 'General Settings',
  fcr_settings_option_about_us: 'About Us',
  settings_logout: 'Logout',
  settings_logout_alert: 'Are you sure to logout?',
  settings_nickname: 'Nick Name',
  fcr_settings_label_region: 'Region',
  fcr_settings_theme: 'Theme',
  fcr_settings_theme_light: 'Light',
  fcr_settings_theme_dark: 'Dark',
  fcr_settings_label_language: 'Language',
  settings_close_account: 'Close Account',
  fcr_settings_option_general_language_simplified: '简体中文',
  fcr_settings_option_general_language_traditional: '繁体中文',
  fcr_settings_option_general_language_english: 'English',
  fcr_settings_label_about_us_about_us: 'About',
  fcr_settings_link_about_us_privacy_policy: 'Privacy Policy',
  fcr_settings_link_about_us_user_agreement: 'Terms of Service',
  fcr_settings_label_about_us_fcr_ver: 'Flexible Classroom Version',
  fcr_settings_label_about_us_sdk_ver: 'SDK Version',
  settings_disclaimer: 'Product Disclaimer',
  settings_register: 'Sign up Agora.io',
  settings_publish_time: 'Version Time',
  settings_logoff_detail: {
    1: 'Unfortunately,Flexible Classroom is not able to continue serving you.Thank you.Delete your account will result in …',
    2: '1.Delete the room data associated with the account.',
    3: '2.delete account and mobile.',
    4: 'I have read and confirmed to delete my account.',
  },
  settings_logoff_agreenment: 'I have read and confirm the cancellation of account',
  settings_logoff_submit: 'Confirm',
  settings_logoff_alert: 'Are you sure to delete your account?',
  fcr_vocational_teacher_absent: 'The teacher is not in the classroom',
  fcr_vocational_video_start_early_alert:
    'The lesson video will be played immediately in advance, is it confirmed?',
  // legacy
  home: {
    form_title: 'Free Use',
    roomId: 'RoomId',
    roomId_placeholder: 'Please input roomId',
    userId: 'UserId',
    userId_placeholder: 'Please input userId',
    roomName: 'Room',
    roomName_placeholder: 'Please input room name',
    nickName: 'Name',
    nickName_placeholder: 'Please input your name',
    roomType: 'Type',
    roomType_placeholder: 'Please select class type',
    serviceType: 'Service',
    serviceType_placeholder: 'Please select voice and video service',
    serviceType_premium: 'Interactive Live Streaming Premium',
    serviceType_standard: 'Interactive Live Streaming Standard',
    serviceType_latency: 'Standard Latency Streaming (CDN)',
    serviceType_mix: 'Mix Streaming（CDN&RTC）',
    serviceType_mix_stream_cdn: 'Mix Streaming CDN',
    serviceType_hosting_scene: 'Hosting Scene',
    roomType_1v1: 'One to One Classroom',
    roomType_interactiveSmallClass: 'Interactive Small Classroom',
    roomType_interactiveBigClass: 'Lecture Hall',
    roomType_vocationalClass: 'Vocational Lecture Hall',
    roomType_cloudClass: 'Cloud Classroom',
    role: 'Role',
    role_placeholder: 'Please select your role',
    encryptionMode: 'Mode',
    encryptionMode_placeholder: 'Please select your mode',
    encryptionKey: 'Key',
    encryptionKey_placeholder: 'Please input your key',
    role_teacher: 'Teacher',
    role_student: 'Student',
    role_assistant: 'Assistant',
    role_audience: 'Audience',
    role_observer: 'Observer',
    language: 'Language:',
    language_placeholder: 'Please choose language',
    duration: 'Duration',
    duration_unit: 'mins',
    enter_classroom: 'Enter',
    region_placeholder: 'Please choose region',
    region: 'Region:',
    'header-left-title': 'Agora Flexible Classroom',
    about: 'About',
    'input-error-msg': 'Between 6 and 50 characters,letter or number only',
    'input-username-error-msg': 'Between 3 and 25 characters,letter or number only',
    network_error: 'Network error, please try again later',
    'recordation-search': 'Recordation',
    'recordation-tip': 'Recordations only within 1 hour',
    replay: 'replay',
    search: 'search',
    system_name: 'Agora Flexible Classroom',
  },
  'home-about': {
    'privacy-policy': 'Privacy Policy',
    'product-disclaimer': 'Product Disclaimer',
    'sign-up': 'Sign up Agora.io',
    'build-time': 'Build Time',
    'sdk-version': 'SDK Version',
    'classroom-version': 'Flexible Classroom Version',
    'commit-id': 'Commit ID',
    check: 'View',
    register: 'Sign up',
  },
  disclaimer: {
    title: 'Product Disclaimer',
    'content-a': `Agora Live ("this product") is a product provided by Agora. Agora enjoys the copyright and ownership of this product. It is hereby granted free of charge to anyone who obtains a copy of this product and related documentation (hereinafter referred to as "software") to try the software without limitation, including but not limited to trial, copy, modify, merge, publish, distribute, but this product shall not be used For any commercial use, you may not sublicense and / or sell copies of the software.`,
    'content-b': `This product is provided "as is" without any express warranty, including but not limited to guarantees of suitability, suitability for specific purposes, and non-infringement. Whether it is due to any contract, infringement or other forms of conduct related to this product or the trial of this product or other methods, Agora will not be responsible for any claims, damages or other liabilities.`,
    'content-c': `You are free to choose whether to try the services provided by this product. If you download, install, or try the services provided in this product, it means that you trust the owner of the product, and Agora shall not be responsible for any form of loss or injury caused by yourself or others when you try the services provided in this product for any reason.`,
  },
  duration_in_mins: '{reason}mins'
};
