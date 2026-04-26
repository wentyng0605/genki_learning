// ============================================================
//  GENKI AUDIO DATA
//
//  三种音频类型：
//  K__ = 课文对话 (Dialogue)     → Google Drive iframe 播放
//  Y__ = 课文阅读 (Reading)      → Google Drive iframe 播放
//  V__ = 单词    (Vocabulary)    → 本地文件，直接用 <audio> 播放
//
//  Google Drive 链接格式（K/Y）：
//    https://drive.google.com/file/d/FILE_ID/preview
//
//  本地单词文件路径格式（V）：
//    audio/genki1/ch01/V01.mp3
//    audio/genki2/ch13/V13.mp3  ...
//
//  本地文件夹结构：
//    your-project/
//    ├── index.html
//    ├── data.js
//    └── audio/
//        ├── genki1/
//        │   ├── ch01/  ← 把 V01.mp3 放这里
//        │   ├── ch02/  ← 把 V02.mp3 放这里
//        │   └── ...
//        └── genki2/
//            ├── ch13/  ← 把 V13.mp3 放这里
//            └── ...
// ============================================================

const audioData = {

  // ════════════════════════════════
  //  GENKI I — TEXTBOOK
  // ════════════════════════════════
  genki1_textbook: {
    "00": [
      { name: "V_K00_01.mp3",    url: "audio/genki1/ch00/K00_01.mp3" },
      { name: "V_K00_02.mp3",    url: "audio/genki1/ch00/K00_02.mp3" },
      { name: "R_K00_03.mp3", url: "https://drive.google.com/file/d/1w6nSodxjGhAuu-P9EvHgadMACM0gF7cm/view?usp=sharing" },
      { name: "R_K00_04.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/view?usp=sharing" },
      { name: "R_K00_05.mp3", url: "https://drive.google.com/file/d/1nDY3T1DmXkroTRVEftS-U2NNHO6wD9RF/view?usp=sharing" },
    ],

    "01": [
      { name: "K_K01_01.mp3", url: "https://drive.google.com/file/d/1EAZk1e9aLxparZNaekOEMHU4mRum8GCg/view?usp=sharing" },
      { name: "K_K01_02.mp3", url: "https://drive.google.com/file/d/1DZHqFKnIJDR1H2Ysd8TSFKiSrG6rAPmB/view?usp=sharing" },
      { name: "K_K01_03.mp3", url: "https://drive.google.com/file/d/1AmqXhJbl6FosvlaTjqNAjP_gKWTzIzLE/view?usp=sharing" },
      { name: "K_K01_04.mp3", url: "https://drive.google.com/file/d/1ddWT2Nyf24o55_AcUQFEKT2fz6VRpfjQ/view?usp=sharing" },

      { name: "V_K01_05.mp3",    url: "audio/genki1/ch01/K01_05.mp3" },
      { name: "V_K01_06.mp3",    url: "audio/genki1/ch01/K01_06.mp3" },
      { name: "V_K01_07.mp3",    url: "audio/genki1/ch01/K01_07.mp3" },
      { name: "V_K01_08.mp3",    url: "audio/genki1/ch01/K01_08.mp3" },

      { name: "R_K01_09.mp3", url: "https://drive.google.com/file/d/1JGWjH2uEO-gDaE45D0rZVGOdZgaU8B-s/view?usp=sharing" },
      { name: "R_K01_10.mp3", url: "https://drive.google.com/file/d/1SdUVbX_W7eHFtXFHe8DNNgNPRKCdjxZn/view?usp=sharing" },
      { name: "R_K01_11.mp3", url: "https://drive.google.com/file/d/1i8H6cYvYlwh1Acbj5JU324qMAA694smX/view?usp=sharing" },
      { name: "R_K01_12.mp3", url: "https://drive.google.com/file/d/1RI9KwgPXaLYE3gh6ax4v963-cJTP4Zpq/view?usp=sharing" },
      { name: "R_K01_13.mp3", url: "https://drive.google.com/file/d/1aCXqzkKpjA05Bj8LXZWcMijMwsRv8Ptl/view?usp=sharing" },
      { name: "R_K01_14.mp3", url: "https://drive.google.com/file/d/1aCXqzkKpjA05Bj8LXZWcMijMwsRv8Ptl/view?usp=sharing" },
      { name: "R_K01_15.mp3", url: "https://drive.google.com/file/d/1Y49JzzC9GrqFaxnNTKBjzIiHKLVbi04H/view?usp=sharing" },
      { name: "R_K01_16.mp3", url: "https://drive.google.com/file/d/1YUgQTP6lyfyjDEJJQNxna2hoGIQNSw0j/view?usp=sharing" },
      { name: "R_K01_17.mp3", url: "https://drive.google.com/file/d/1PS-STA7x4yMXBW7NMnrnJFotW4RA3zzF/view?usp=sharing" },
      { name: "R_K01_18.mp3", url: "https://drive.google.com/file/d/1r4wD4PzClKlfJHKo044pYvhNP-YqwKbL/view?usp=sharing" },
      { name: "R_K01_19.mp3", url: "https://drive.google.com/file/d/1-0aGZJiFA1osPtx3wZ9NSs0m7rM5MxCB/view?usp=sharing" },
      { name: "R_K01_20.mp3", url: "https://drive.google.com/file/d/1-0aGZJiFA1osPtx3wZ9NSs0m7rM5MxCB/view?usp=sharing" },
      { name: "R_K01_21.mp3", url: "https://drive.google.com/file/d/1-0aGZJiFA1osPtx3wZ9NSs0m7rM5MxCB/view?usp=sharing" },
      { name: "R_K01_22.mp3", url: "https://drive.google.com/file/d/1hIt55IxaRS2XTJJ4m_FNJG4YZ0D3RIeT/view?usp=sharing" },
      { name: "R_K01_23.mp3", url: "https://drive.google.com/file/d/1hIt55IxaRS2XTJJ4m_FNJG4YZ0D3RIeT/view?usp=sharing" },
      { name: "R_K01_24.mp3", url: "https://drive.google.com/file/d/1hIt55IxaRS2XTJJ4m_FNJG4YZ0D3RIeT/view?usp=sharing" },

      { name: "Y01_1.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y01_2.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y01_3.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y01_4.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y01_5.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y01_6.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      
    ],

    "02": [
      { name: "K_K02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K02_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K02_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K02_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K02_05.mp3",    url: "audio/genki1/ch02/K02_05.mp3" },
      { name: "V_K02_06.mp3",    url: "audio/genki1/ch02/K02_06.mp3" },

      { name: "R_K02_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K02_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y02_1.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y02_2.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y02_3.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
    ],

    "03": [
      { name: "K_K03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K03_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K03_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K03_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K03_05.mp3",    url: "audio/genki1/ch03/K03_05.mp3" },
      { name: "V_K03_06.mp3",    url: "audio/genki1/ch03/K03_06.mp3" },

      { name: "R_K03_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K03_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y03.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "04": [
      { name: "K_K04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K04_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K04_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K04_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K04_05.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K04_06.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K04_07.mp3",    url: "audio/genki1/ch04/K04_07.mp3" },
      { name: "V_K04_08.mp3",    url: "audio/genki1/ch04/K04_08p3" },

      { name: "R_K04_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_16.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_17.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_18.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_19.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y04.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "05": [
      { name: "K_K05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K05_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K05_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K05_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K05_05.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K05_06.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K05_07.mp3",    url: "audio/genki1/ch05/K05_07.mp3" },
      { name: "V_K05_08.mp3",    url: "audio/genki1/ch05/K05_08.mp3" },

      { name: "R_K04_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K04_16.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y05_1.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "Y05_2.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
    ],

    "06": [
      { name: "K_K06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K06_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K06_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K06_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K06_05.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K06_06.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K06_07.mp3",    url: "audio/genki1/ch06/K06_07.mp3" },
      { name: "V_K06_08.mp3",    url: "audio/genki1/ch06/K06_08.mp3" },

      { name: "R_K06_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K06_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y06.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "07": [
      { name: "K_K07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K07_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K07_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K07_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K07_05.mp3",    url: "audio/genki1/ch07/K07_05.mp3" },
      { name: "V_K07_06.mp3",    url: "audio/genki1/ch07/K07_06.mp3" },

      { name: "R_K07_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K07_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y07.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "08": [
      { name: "K_K08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K08_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K08_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K08_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K08_05.mp3",    url: "audio/genki1/ch08/K08_05.mp3" },
      { name: "V_K08_06.mp3",    url: "audio/genki1/ch08/K08_06.mp3" },

      { name: "R_K08_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_16.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_17.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K08_18.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y08.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "09": [
      { name: "K_K09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K09_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K09_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K09_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K09_05.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K09_06.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K09_07.mp3",    url: "audio/genki1/ch09/K09_07.mp3" },
      { name: "V_K09_08.mp3",    url: "audio/genki1/ch09/K09_08.mp3" },

      { name: "R_K09_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_16.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K09_17.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      
      { name: "Y09_1.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y09_2.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],

    "10": [
      { name: "K_K10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K10_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K10_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K10_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K10_05.mp3",    url: "audio/genki1/ch10/K10_05.mp3" },
      { name: "V_K10_06.mp3",    url: "audio/genki1/ch10/K10_06.mp3" },

      { name: "R_K10_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K10_15.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y10.mp3",    url: "https://drive.google.com/file/d/1Vz69nog5Yf62jFk6zji4d27gbLOOSXQP/preview" },
    ],

    "11": [
      { name: "K_K11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K11_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K11_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K11_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K11_05.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K11_06.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K11_07.mp3",    url: "audio/genki1/ch11/K11_07.mp3" },
      { name: "V_K11_08.mp3",    url: "audio/genki1/ch11/K11_08.mp3" },

      { name: "R_K11_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K11_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K11_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K11_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K11_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K11_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y11_1.mp3",  url: "https://drive.google.com/file/d/1047CLg3V2WVBrpy6_pcNi5TNYhHrYyAZ/preview" },
      { name: "Y11_2.mp3",  url: "https://drive.google.com/file/d/1l1tZJxjz7wHz156oUtyTzSTyNnCCXNMb/preview" },
    ],

    "12": [
      { name: "K_K12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K12_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K12_03.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_K12_04.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "V_K12_05.mp3",    url: "audio/genki1/ch12/K12_05.mp3" },
      { name: "V_K12_06.mp3",    url: "audio/genki1/ch12/K12_06.mp3" },

      { name: "R_K12_07.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_08.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_09.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_10.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_11.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_12.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_13.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "R_K12_14.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },

      { name: "Y12.mp3",    url: "https://drive.google.com/file/d/1ti8tcyioaOL23kLzCMfa1rl1hXqWggiI/preview" },
    ],
  },

  // ════════════════════════════════
  //  GENKI I — WORKBOOK
  // ════════════════════════════════
  genki1_workbook: {
    "01": [
      { name: "W01_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "W01_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "02": [{ name: "W02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "03": [{ name: "W03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "04": [{ name: "W04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "05": [{ name: "W05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "06": [{ name: "W06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "07": [{ name: "W07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "08": [{ name: "W08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "09": [{ name: "W09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "10": [{ name: "W10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "11": [{ name: "W11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "12": [{ name: "W12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
  },

  // ════════════════════════════════
  //  GENKI II — TEXTBOOK
  // ════════════════════════════════
  genki2_textbook: {
    "13": [
      { name: "K13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y13.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V13.mp3",    url: "audio/genki2/ch13/V13.mp3" },
    ],
    "14": [
      { name: "K14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y14.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V14.mp3",    url: "audio/genki2/ch14/V14.mp3" },
    ],
    "15": [
      { name: "K15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y15.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V15.mp3",    url: "audio/genki2/ch15/V15.mp3" },
    ],
    "16": [
      { name: "K16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y16.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V16.mp3",    url: "audio/genki2/ch16/V16.mp3" },
    ],
    "17": [
      { name: "K17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y17.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V17.mp3",    url: "audio/genki2/ch17/V17.mp3" },
    ],
    "18": [
      { name: "K18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y18.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V18.mp3",    url: "audio/genki2/ch18/V18.mp3" },
    ],
    "19": [
      { name: "K19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y19.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V19.mp3",    url: "audio/genki2/ch19/V19.mp3" },
    ],
    "20": [
      { name: "K20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y20.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V20.mp3",    url: "audio/genki2/ch20/V20.mp3" },
    ],
    "21": [
      { name: "K21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y21.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V21.mp3",    url: "audio/genki2/ch21/V21.mp3" },
    ],
    "22": [
      { name: "K22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y22.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V22.mp3",    url: "audio/genki2/ch22/V22.mp3" },
    ],
    "23": [
      { name: "K23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y23.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V23.mp3",    url: "audio/genki2/ch23/V23.mp3" },
    ],
    "24": [
      { name: "K24_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y24.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V24.mp3",    url: "audio/genki2/ch24/V24.mp3" },
    ],
  },

  // ════════════════════════════════
  //  GENKI II — WORKBOOK
  // ════════════════════════════════
  genki2_workbook: {
    "13": [{ name: "W13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "14": [{ name: "W14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "15": [{ name: "W15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "16": [{ name: "W16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "17": [{ name: "W17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "18": [{ name: "W18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "19": [{ name: "W19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "20": [{ name: "W20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "21": [{ name: "W21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "22": [{ name: "W22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "23": [{ name: "W23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
    "24": [{ name: "W24_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" }],
  },
};
