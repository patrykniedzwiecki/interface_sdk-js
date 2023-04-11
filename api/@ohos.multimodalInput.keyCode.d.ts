/*
 * Copyright (c) 2022 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS;
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * KeyCode
 *
 * @enum { number }
 * @syscap SystemCapability.MultimodalInput.Input.Core
 * @since 9
 */
export declare enum KeyCode {
  KEYCODE_FN = 0,
  KEYCODE_UNKNOWN = -1,
  KEYCODE_HOME = 1,
  KEYCODE_BACK = 2,
  KEYCODE_MEDIA_PLAY_PAUSE = 10,
  KEYCODE_MEDIA_STOP = 11,
  KEYCODE_MEDIA_NEXT = 12,
  KEYCODE_MEDIA_PREVIOUS = 13,
  KEYCODE_MEDIA_REWIND = 14,
  KEYCODE_MEDIA_FAST_FORWARD = 15,
  KEYCODE_VOLUME_UP = 16,
  KEYCODE_VOLUME_DOWN = 17,
  KEYCODE_POWER = 18,
  KEYCODE_CAMERA = 19,
  KEYCODE_VOLUME_MUTE = 22,
  KEYCODE_MUTE = 23,
  KEYCODE_BRIGHTNESS_UP = 40,
  KEYCODE_BRIGHTNESS_DOWN = 41,
  KEYCODE_0 = 2000,
  KEYCODE_1 = 2001,
  KEYCODE_2 = 2002,
  KEYCODE_3 = 2003,
  KEYCODE_4 = 2004,
  KEYCODE_5 = 2005,
  KEYCODE_6 = 2006,
  KEYCODE_7 = 2007,
  KEYCODE_8 = 2008,
  KEYCODE_9 = 2009,
  KEYCODE_STAR = 2010,
  KEYCODE_POUND = 2011,
  KEYCODE_DPAD_UP = 2012,
  KEYCODE_DPAD_DOWN = 2013,
  KEYCODE_DPAD_LEFT = 2014,
  KEYCODE_DPAD_RIGHT = 2015,
  KEYCODE_DPAD_CENTER = 2016,
  KEYCODE_A = 2017,
  KEYCODE_B = 2018,
  KEYCODE_C = 2019,
  KEYCODE_D = 2020,
  KEYCODE_E = 2021,
  KEYCODE_F = 2022,
  KEYCODE_G = 2023,
  KEYCODE_H = 2024,
  KEYCODE_I = 2025,
  KEYCODE_J = 2026,
  KEYCODE_K = 2027,
  KEYCODE_L = 2028,
  KEYCODE_M = 2029,
  KEYCODE_N = 2030,
  KEYCODE_O = 2031,
  KEYCODE_P = 2032,
  KEYCODE_Q = 2033,
  KEYCODE_R = 2034,
  KEYCODE_S = 2035,
  KEYCODE_T = 2036,
  KEYCODE_U = 2037,
  KEYCODE_V = 2038,
  KEYCODE_W = 2039,
  KEYCODE_X = 2040,
  KEYCODE_Y = 2041,
  KEYCODE_Z = 2042,
  KEYCODE_COMMA = 2043,
  KEYCODE_PERIOD = 2044,
  KEYCODE_ALT_LEFT = 2045,
  KEYCODE_ALT_RIGHT = 2046,
  KEYCODE_SHIFT_LEFT = 2047,
  KEYCODE_SHIFT_RIGHT = 2048,
  KEYCODE_TAB = 2049,
  KEYCODE_SPACE = 2050,
  KEYCODE_SYM = 2051,
  KEYCODE_EXPLORER = 2052,
  KEYCODE_ENVELOPE = 2053,
  KEYCODE_ENTER = 2054,
  KEYCODE_DEL = 2055,
  KEYCODE_GRAVE = 2056,
  KEYCODE_MINUS = 2057,
  KEYCODE_EQUALS = 2058,
  KEYCODE_LEFT_BRACKET = 2059,
  KEYCODE_RIGHT_BRACKET = 2060,
  KEYCODE_BACKSLASH = 2061,
  KEYCODE_SEMICOLON = 2062,
  KEYCODE_APOSTROPHE = 2063,
  KEYCODE_SLASH = 2064,
  KEYCODE_AT = 2065,
  KEYCODE_PLUS = 2066,
  KEYCODE_MENU = 2067,
  KEYCODE_PAGE_UP = 2068,
  KEYCODE_PAGE_DOWN = 2069,
  KEYCODE_ESCAPE = 2070,
  KEYCODE_FORWARD_DEL = 2071,
  KEYCODE_CTRL_LEFT = 2072,
  KEYCODE_CTRL_RIGHT = 2073,
  KEYCODE_CAPS_LOCK = 2074,
  KEYCODE_SCROLL_LOCK = 2075,
  KEYCODE_META_LEFT = 2076,
  KEYCODE_META_RIGHT = 2077,
  KEYCODE_FUNCTION = 2078,
  KEYCODE_SYSRQ = 2079,
  KEYCODE_BREAK = 2080,
  KEYCODE_MOVE_HOME = 2081,
  KEYCODE_MOVE_END = 2082,
  KEYCODE_INSERT = 2083,
  KEYCODE_FORWARD = 2084,
  KEYCODE_MEDIA_PLAY = 2085,
  KEYCODE_MEDIA_PAUSE = 2086,
  KEYCODE_MEDIA_CLOSE = 2087,
  KEYCODE_MEDIA_EJECT = 2088,
  KEYCODE_MEDIA_RECORD = 2089,
  KEYCODE_F1 = 2090,
  KEYCODE_F2 = 2091,
  KEYCODE_F3 = 2092,
  KEYCODE_F4 = 2093,
  KEYCODE_F5 = 2094,
  KEYCODE_F6 = 2095,
  KEYCODE_F7 = 2096,
  KEYCODE_F8 = 2097,
  KEYCODE_F9 = 2098,
  KEYCODE_F10 = 2099,
  KEYCODE_F11 = 2100,
  KEYCODE_F12 = 2101,
  KEYCODE_NUM_LOCK = 2102,
  KEYCODE_NUMPAD_0 = 2103,
  KEYCODE_NUMPAD_1 = 2104,
  KEYCODE_NUMPAD_2 = 2105,
  KEYCODE_NUMPAD_3 = 2106,
  KEYCODE_NUMPAD_4 = 2107,
  KEYCODE_NUMPAD_5 = 2108,
  KEYCODE_NUMPAD_6 = 2109,
  KEYCODE_NUMPAD_7 = 2110,
  KEYCODE_NUMPAD_8 = 2111,
  KEYCODE_NUMPAD_9 = 2112,
  KEYCODE_NUMPAD_DIVIDE = 2113,
  KEYCODE_NUMPAD_MULTIPLY = 2114,
  KEYCODE_NUMPAD_SUBTRACT = 2115,
  KEYCODE_NUMPAD_ADD = 2116,
  KEYCODE_NUMPAD_DOT = 2117,
  KEYCODE_NUMPAD_COMMA = 2118,
  KEYCODE_NUMPAD_ENTER = 2119,
  KEYCODE_NUMPAD_EQUALS = 2120,
  KEYCODE_NUMPAD_LEFT_PAREN = 2121,
  KEYCODE_NUMPAD_RIGHT_PAREN = 2122,
  KEYCODE_VIRTUAL_MULTITASK = 2210,
  KEYCODE_SLEEP = 2600,
  KEYCODE_ZENKAKU_HANKAKU = 2601,
  KEYCODE_102ND = 2602,
  KEYCODE_RO = 2603,
  KEYCODE_KATAKANA = 2604,
  KEYCODE_HIRAGANA = 2605,
  KEYCODE_HENKAN = 2606,
  KEYCODE_KATAKANA_HIRAGANA = 2607,
  KEYCODE_MUHENKAN = 2608,
  KEYCODE_LINEFEED = 2609,
  KEYCODE_MACRO = 2610,
  KEYCODE_NUMPAD_PLUSMINUS = 2611,
  KEYCODE_SCALE = 2612,
  KEYCODE_HANGUEL = 2613,
  KEYCODE_HANJA = 2614,
  KEYCODE_YEN = 2615,
  KEYCODE_STOP = 2616,
  KEYCODE_AGAIN = 2617,
  KEYCODE_PROPS = 2618,
  KEYCODE_UNDO = 2619,
  KEYCODE_COPY = 2620,
  KEYCODE_OPEN = 2621,
  KEYCODE_PASTE = 2622,
  KEYCODE_FIND = 2623,
  KEYCODE_CUT = 2624,
  KEYCODE_HELP = 2625,
  KEYCODE_CALC = 2626,
  KEYCODE_FILE = 2627,
  KEYCODE_BOOKMARKS = 2628,
  KEYCODE_NEXT = 2629,
  KEYCODE_PLAYPAUSE = 2630,
  KEYCODE_PREVIOUS = 2631,
  KEYCODE_STOPCD = 2632,
  KEYCODE_CONFIG = 2634,
  KEYCODE_REFRESH = 2635,
  KEYCODE_EXIT = 2636,
  KEYCODE_EDIT = 2637,
  KEYCODE_SCROLLUP = 2638,
  KEYCODE_SCROLLDOWN = 2639,
  KEYCODE_NEW = 2640,
  KEYCODE_REDO = 2641,
  KEYCODE_CLOSE = 2642,
  KEYCODE_PLAY = 2643,
  KEYCODE_BASSBOOST = 2644,
  KEYCODE_PRINT = 2645,
  KEYCODE_CHAT = 2646,
  KEYCODE_FINANCE = 2647,
  KEYCODE_CANCEL = 2648,
  KEYCODE_KBDILLUM_TOGGLE = 2649,
  KEYCODE_KBDILLUM_DOWN = 2650,
  KEYCODE_KBDILLUM_UP = 2651,
  KEYCODE_SEND = 2652,
  KEYCODE_REPLY = 2653,
  KEYCODE_FORWARDMAIL = 2654,
  KEYCODE_SAVE = 2655,
  KEYCODE_DOCUMENTS = 2656,
  KEYCODE_VIDEO_NEXT = 2657,
  KEYCODE_VIDEO_PREV = 2658,
  KEYCODE_BRIGHTNESS_CYCLE = 2659,
  KEYCODE_BRIGHTNESS_ZERO = 2660,
  KEYCODE_DISPLAY_OFF = 2661,
  KEYCODE_BTN_MISC = 2662,
  KEYCODE_GOTO = 2663,
  KEYCODE_INFO = 2664,
  KEYCODE_PROGRAM = 2665,
  KEYCODE_PVR = 2666,
  KEYCODE_SUBTITLE = 2667,
  KEYCODE_FULL_SCREEN = 2668,
  KEYCODE_KEYBOARD = 2669,
  KEYCODE_ASPECT_RATIO = 2670,
  KEYCODE_PC = 2671,
  KEYCODE_TV = 2672,
  KEYCODE_TV2 = 2673,
  KEYCODE_VCR = 2674,
  KEYCODE_VCR2 = 2675,
  KEYCODE_SAT = 2676,
  KEYCODE_CD = 2677,
  KEYCODE_TAPE = 2678,
  KEYCODE_TUNER = 2679,
  KEYCODE_PLAYER = 2680,
  KEYCODE_DVD = 2681,
  KEYCODE_AUDIO = 2682,
  KEYCODE_VIDEO = 2683,
  KEYCODE_MEMO = 2684,
  KEYCODE_CALENDAR = 2685,
  KEYCODE_RED = 2686,
  KEYCODE_GREEN = 2687,
  KEYCODE_YELLOW = 2688,
  KEYCODE_BLUE = 2689,
  KEYCODE_CHANNELUP = 2690,
  KEYCODE_CHANNELDOWN = 2691,
  KEYCODE_LAST = 2692,
  KEYCODE_RESTART = 2693,
  KEYCODE_SLOW = 2694,
  KEYCODE_SHUFFLE = 2695,
  KEYCODE_VIDEOPHONE = 2696,
  KEYCODE_GAMES = 2697,
  KEYCODE_ZOOMIN = 2698,
  KEYCODE_ZOOMOUT = 2699,
  KEYCODE_ZOOMRESET = 2700,
  KEYCODE_WORDPROCESSOR = 2701,
  KEYCODE_EDITOR = 2702,
  KEYCODE_SPREADSHEET = 2703,
  KEYCODE_GRAPHICSEDITOR = 2704,
  KEYCODE_PRESENTATION = 2705,
  KEYCODE_DATABASE = 2706,
  KEYCODE_NEWS = 2707,
  KEYCODE_VOICEMAIL = 2708,
  KEYCODE_ADDRESSBOOK = 2709,
  KEYCODE_MESSENGER = 2710,
  KEYCODE_BRIGHTNESS_TOGGLE = 2711,
  KEYCODE_SPELLCHECK = 2712,
  KEYCODE_COFFEE = 2713,
  KEYCODE_MEDIA_REPEAT = 2714,
  KEYCODE_IMAGES = 2715,
  KEYCODE_BUTTONCONFIG = 2716,
  KEYCODE_TASKMANAGER = 2717,
  KEYCODE_JOURNAL = 2718,
  KEYCODE_CONTROLPANEL = 2719,
  KEYCODE_APPSELECT = 2720,
  KEYCODE_SCREENSAVER = 2721,
  KEYCODE_ASSISTANT = 2722,
  KEYCODE_KBD_LAYOUT_NEXT = 2723,
  KEYCODE_BRIGHTNESS_MIN = 2724,
  KEYCODE_BRIGHTNESS_MAX = 2725,
  KEYCODE_KBDINPUTASSIST_PREV = 2726,
  KEYCODE_KBDINPUTASSIST_NEXT = 2727,
  KEYCODE_KBDINPUTASSIST_PREVGROUP = 2728,
  KEYCODE_KBDINPUTASSIST_NEXTGROUP = 2729,
  KEYCODE_KBDINPUTASSIST_ACCEPT = 2730,
  KEYCODE_KBDINPUTASSIST_CANCEL = 2731,
  KEYCODE_FRONT = 2800,
  KEYCODE_SETUP = 2801,
  KEYCODE_WAKEUP = 2802,
  KEYCODE_SENDFILE = 2803,
  KEYCODE_DELETEFILE = 2804,
  KEYCODE_XFER = 2805,
  KEYCODE_PROG1 = 2806,
  KEYCODE_PROG2 = 2807,
  KEYCODE_MSDOS = 2808,
  KEYCODE_SCREENLOCK = 2809,
  KEYCODE_DIRECTION_ROTATE_DISPLAY = 2810,
  KEYCODE_CYCLEWINDOWS = 2811,
  KEYCODE_COMPUTER = 2812,
  KEYCODE_EJECTCLOSECD = 2813,
  KEYCODE_ISO = 2814,
  KEYCODE_MOVE = 2815,
  KEYCODE_F13 = 2816,
  KEYCODE_F14 = 2817,
  KEYCODE_F15 = 2818,
  KEYCODE_F16 = 2819,
  KEYCODE_F17 = 2820,
  KEYCODE_F18 = 2821,
  KEYCODE_F19 = 2822,
  KEYCODE_F20 = 2823,
  KEYCODE_F21 = 2824,
  KEYCODE_F22 = 2825,
  KEYCODE_F23 = 2826,
  KEYCODE_F24 = 2827,
  KEYCODE_PROG3 = 2828,
  KEYCODE_PROG4 = 2829,
  KEYCODE_DASHBOARD = 2830,
  KEYCODE_SUSPEND = 2831,
  KEYCODE_HP = 2832,
  KEYCODE_SOUND = 2833,
  KEYCODE_QUESTION = 2834,
  KEYCODE_CONNECT = 2836,
  KEYCODE_SPORT = 2837,
  KEYCODE_SHOP = 2838,
  KEYCODE_ALTERASE = 2839,
  KEYCODE_SWITCHVIDEOMODE = 2841,
  KEYCODE_BATTERY = 2842,
  KEYCODE_BLUETOOTH = 2843,
  KEYCODE_WLAN = 2844,
  KEYCODE_UWB = 2845,
  KEYCODE_WWAN_WIMAX = 2846,
  KEYCODE_RFKILL = 2847,
  KEYCODE_CHANNEL = 3001,
  KEYCODE_BTN_0 = 3100,
  KEYCODE_BTN_1 = 3101,
  KEYCODE_BTN_2 = 3102,
  KEYCODE_BTN_3 = 3103,
  KEYCODE_BTN_4 = 3104,
  KEYCODE_BTN_5 = 3105,
  KEYCODE_BTN_6 = 3106,
  KEYCODE_BTN_7 = 3107,
  KEYCODE_BTN_8 = 3108,
  KEYCODE_BTN_9 = 3109
}
