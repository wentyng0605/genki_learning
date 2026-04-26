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

      { name: "R_K01_09.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_10.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_11.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_12.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_13.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_14.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_15.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_16.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_17.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_18.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_19.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_20.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_21.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_22.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_23.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      { name: "R_K01_24.mp3", url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },

      { name: "Y01.mp3",    url: "https://drive.google.com/file/d/19FjmdkC3hlXn2SMkR4FfOgxgrFGzxrZB/preview" },
      
    ],
    "02": [
      { name: "K02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K02_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y02.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V02.mp3",    url: "audio/genki1/ch02/V02.mp3" },
    ],
    "03": [
      { name: "K03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K03_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y03.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V03.mp3",    url: "audio/genki1/ch03/V03.mp3" },
    ],
    "04": [
      { name: "K04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K04_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y04.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V04.mp3",    url: "audio/genki1/ch04/V04.mp3" },
    ],
    "05": [
      { name: "K05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K05_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y05.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V05.mp3",    url: "audio/genki1/ch05/V05.mp3" },
    ],
    "06": [
      { name: "K06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K06_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y06.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V06.mp3",    url: "audio/genki1/ch06/V06.mp3" },
    ],
    "07": [
      { name: "K07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K07_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y07.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V07.mp3",    url: "audio/genki1/ch07/V07.mp3" },
    ],
    "08": [
      { name: "K08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K08_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y08.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V08.mp3",    url: "audio/genki1/ch08/V08.mp3" },
    ],
    "09": [
      { name: "K09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K09_02.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "Y09.mp3",    url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V09.mp3",    url: "audio/genki1/ch09/V09.mp3" },
    ],
    "10": [
      { name: "K10_01.mp3", url: "https://drive.google.com/file/d/1Q7CmYLUHndinzhsMRO6VHvBhu3MV8jF0/preview" },
      { name: "K10_02.mp3", url: "https://drive.google.com/file/d/1oh_tb0qK9tpX2GErcDPgiokSZnHzoqpO/preview" },
      { name: "K10_03.mp3", url: "https://drive.google.com/file/d/1yuSszvoDIuv2m3G2vOKFOnyHnE74tUwy/preview" },
      { name: "K10_04.mp3", url: "https://drive.google.com/file/d/1apDnUBA4VUpQZJhxm-1d49A00GlwpZ8d/preview" },
      { name: "K10_05.mp3", url: "https://drive.google.com/file/d/1uMXNQdfU21sZjouDIOHvqp0x3bqHQNmA/preview" },
      { name: "K10_06.mp3", url: "https://drive.google.com/file/d/1rTWy6oxLAGhEjpr1Lbu9-haHAybs2F5x/preview" },
      { name: "K10_07.mp3", url: "https://drive.google.com/file/d/1BbxqVbVmEu9sBKI2guRW6ShMtsa-ccoj/preview" },
      { name: "K10_08.mp3", url: "https://drive.google.com/file/d/1wgPl4LGXeKw6mpBrQ1-ATnkdSJ6CJHFx/preview" },
      { name: "K10_09.mp3", url: "https://drive.google.com/file/d/1V4HAPO5n_thrPhafURln4ed8U8fMtF4U/preview" },
      { name: "K10_10.mp3", url: "https://drive.google.com/file/d/1BRxVMRdxODpEK7kndyW5id_EKyU0lwRo/preview" },
      { name: "K10_11.mp3", url: "https://drive.google.com/file/d/1C1fbzAUjC7LT1dnTBX12t8cXRivv-x-x/preview" },
      { name: "K10_12.mp3", url: "https://drive.google.com/file/d/1bEhgr_RcQlOKiaebfT1vvcSqBDx718bn/preview" },
      { name: "K10_13.mp3", url: "https://drive.google.com/file/d/1_NXSPnUxnjFV6qGI6XUC3fUUMwAANy81/preview" },
      { name: "K10_14.mp3", url: "https://drive.google.com/file/d/1nG0U5WHhG1x-ildk-m_MP9px2IHW70aI/preview" },
      { name: "K10_15.mp3", url: "https://drive.google.com/file/d/1ucmmJ6mb_NIm5fbkYP2Fgzwg5PTbm5BR/preview" },
      { name: "Y10.mp3",    url: "https://drive.google.com/file/d/1Vz69nog5Yf62jFk6zji4d27gbLOOSXQP/preview" },
      { name: "V10.mp3",    url: "audio/genki1/ch10/V10.mp3" },
    ],
    "11": [
      { name: "K11_01.mp3", url: "https://drive.google.com/file/d/1Rj6rEF-ojfY705_E1OAnOrtV7hniw2Az/preview" },
      { name: "K11_02.mp3", url: "https://drive.google.com/file/d/1zx8iocwPP_8NY7eZU_4nFGLDKMBR1izj/preview" },
      { name: "K11_03.mp3", url: "https://drive.google.com/file/d/1JntNvFeUReXic3dsTSxBHZy0_mZSpmKX/preview" },
      { name: "K11_04.mp3", url: "https://drive.google.com/file/d/1fcl9adKoRsBSVI9_lFqXO6s-0dhkGvwK/preview" },
      { name: "K11_05.mp3", url: "https://drive.google.com/file/d/1IoPXZh5A4Gfex0R0igFcSobN2zMUed7R/preview" },
      { name: "K11_06.mp3", url: "https://drive.google.com/file/d/1Kjb00mvAwqRm_-6GxTqJDQMUB1DBb9i_/preview" },
      { name: "K11_07.mp3", url: "https://drive.google.com/file/d/1xaRzW5aBm6vska71D7GYE54z-iEkxf5q/preview" },
      { name: "K11_08.mp3", url: "https://drive.google.com/file/d/1T1_kwlHh_4-KmpzN1jJvRtdmJWmu_Yzv/preview" },
      { name: "K11_09.mp3", url: "https://drive.google.com/file/d/1J9F3HTIqYEdke7tQQSvT7HLISGdLlNIs/preview" },
      { name: "K11_10.mp3", url: "https://drive.google.com/file/d/1915RWju60ldBX92c6KaYtEZKKT1eEwhr/preview" },
      { name: "K11_11.mp3", url: "https://drive.google.com/file/d/16UfpVcXpQhSVUICB1tqkO_BPais5AYCw/preview" },
      { name: "K11_12.mp3", url: "https://drive.google.com/file/d/1Vpqt7BQ-7NJQl0zO29Ei4vyWStTwLidS/preview" },
      { name: "K11_13.mp3", url: "https://drive.google.com/file/d/1SnlZL3baXtBkBhOpLUGElSsSgFCifCSP/preview" },
      { name: "K11_14.mp3", url: "https://drive.google.com/file/d/1xHrB_uM8v6lLTKmcPYhMhbIOZhiPITFX/preview" },
      { name: "Y11_1.mp3",  url: "https://drive.google.com/file/d/1047CLg3V2WVBrpy6_pcNi5TNYhHrYyAZ/preview" },
      { name: "Y11_2.mp3",  url: "https://drive.google.com/file/d/1l1tZJxjz7wHz156oUtyTzSTyNnCCXNMb/preview" },
      { name: "V11.mp3",    url: "audio/genki1/ch11/V11.mp3" },
    ],
    "12": [
      { name: "K12_01.mp3", url: "https://drive.google.com/file/d/1QmYJ-Ih8qKgSZ-Nn_YC9Pv9bi1rpTyO0/preview" },
      { name: "K12_02.mp3", url: "https://drive.google.com/file/d/1lx4laXQC6XdUBRxy49BoM4u5mhn7BrqQ/preview" },
      { name: "K12_03.mp3", url: "https://drive.google.com/file/d/1YNXRQmUxG7r2FN-0lgBrVGhOmWC8RZy7/preview" },
      { name: "K12_04.mp3", url: "https://drive.google.com/file/d/1kKrBaHncsAeNz_sD6hYbQDwBAhIvWdHo/preview" },
      { name: "K12_05.mp3", url: "https://drive.google.com/file/d/1TNnJVkFrSeznI1aMP92VP6z-CouDVtwb/preview" },
      { name: "K12_06.mp3", url: "https://drive.google.com/file/d/1eg1q7DwmDHuqJoa6vzT6PtR1QeRi15zF/preview" },
      { name: "K12_07.mp3", url: "https://drive.google.com/file/d/1oNrPtLbQFwVKGMRKm3wlK8kWcJgvY7yO/preview" },
      { name: "K12_08.mp3", url: "https://drive.google.com/file/d/1wgPl4LGXeKw6mpBrQ1-ATnkdSJ6CJHFx/preview" },
      { name: "K12_09.mp3", url: "https://drive.google.com/file/d/19YVhkIrQkatsEgNrOTdCc54QIF2ijla8/preview" },
      { name: "K12_10.mp3", url: "https://drive.google.com/file/d/1ge-afbjxsMHjwC_L4Oo0p8nq0c2FbHsP/preview" },
      { name: "K12_11.mp3", url: "https://drive.google.com/file/d/1FD2UUwhv_UVWGTFEKNN5cf60LNZl4qGG/preview" },
      { name: "K12_12.mp3", url: "https://drive.google.com/file/d/1ruTOLUep2LeUZZe9-qX7TrrDbPHT1MLl/preview" },
      { name: "K12_13.mp3", url: "https://drive.google.com/file/d/1COWhM2ehomtXn_geB_NrU26Tb5oddIYn/preview" },
      { name: "K12_14.mp3", url: "https://drive.google.com/file/d/1pqie16hvkK3aWr5R6CC7yn7HUV0EOZ2b/preview" },
      { name: "Y12.mp3",    url: "https://drive.google.com/file/d/1ti8tcyioaOL23kLzCMfa1rl1hXqWggiI/preview" },
      { name: "V12.mp3",    url: "audio/genki1/ch12/V12.mp3" },
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
