// ============================================================
//  GENKI AUDIO DATA — Updated Structure
//
//  TEXTBOOK 前缀规则：
//  K part（绿色系）:
//    K_K##_## = 课文 Dialogue     → Google Drive
//    V_K##_## = 单词 Vocabulary   → 本地文件
//    R_K##_## = 练习 Practice     → Google Drive
//
//  Y part（橙色系）:
//    K_Y##_## = 课文 Dialogue     → Google Drive
//    V_Y##_## = 单词 Vocabulary   → 本地文件
//    R_Y##_## = 练习 Practice     → Google Drive
//
//  WORKBOOK 前缀规则：
//    WK##_## = K part（绿色，不细分）→ Google Drive
//    WY##_## = Y part（橙色，不细分）→ Google Drive
//
//  Google Drive 链接格式：
//    https://drive.google.com/file/d/FILE_ID/preview
//
//  本地文件路径格式：
//    audio/genki1/ch01/V_K01_01.mp3
//    audio/genki2/ch13/V_K13_01.mp3
// ============================================================

const audioData = {

  // ════════════════════════════════
  //  GENKI I — TEXTBOOK
  // ════════════════════════════════
  genki1_textbook: {
    "01": [
      // K part — 课文
      { name: "K_K01_01.mp3", url: "https://drive.google.com/drive/folders/1TC0AKfF6AjQtlVLP6h3C2bJ4G-DXXJZo?usp=sharing" },
      // K part — 单词
      { name: "V_K01_01.mp3", url: "audio/genki1/ch01/V_K01_01.mp3" },
      // K part — 练习
      { name: "R_K01_01.mp3", url: "https://drive.google.com/drive/folders/1TC0AKfF6AjQtlVLP6h3C2bJ4G-DXXJZo?usp=sharing" },
      // Y part — 课文
      { name: "K_Y01_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      // Y part — 单词
      { name: "V_Y01_01.mp3", url: "audio/genki1/ch01/V_Y01_01.mp3" },
      // Y part — 练习
      { name: "R_Y01_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "02": [
      { name: "K_K02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K02_01.mp3", url: "audio/genki1/ch02/V_K02_01.mp3" },
      { name: "R_K02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y02_01.mp3", url: "audio/genki1/ch02/V_Y02_01.mp3" },
      { name: "R_Y02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "03": [
      { name: "K_K03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K03_01.mp3", url: "audio/genki1/ch03/V_K03_01.mp3" },
      { name: "R_K03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y03_01.mp3", url: "audio/genki1/ch03/V_Y03_01.mp3" },
      { name: "R_Y03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "04": [
      { name: "K_K04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K04_01.mp3", url: "audio/genki1/ch04/V_K04_01.mp3" },
      { name: "R_K04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y04_01.mp3", url: "audio/genki1/ch04/V_Y04_01.mp3" },
      { name: "R_Y04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "05": [
      { name: "K_K05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K05_01.mp3", url: "audio/genki1/ch05/V_K05_01.mp3" },
      { name: "R_K05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y05_01.mp3", url: "audio/genki1/ch05/V_Y05_01.mp3" },
      { name: "R_Y05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "06": [
      { name: "K_K06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K06_01.mp3", url: "audio/genki1/ch06/V_K06_01.mp3" },
      { name: "R_K06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y06_01.mp3", url: "audio/genki1/ch06/V_Y06_01.mp3" },
      { name: "R_Y06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "07": [
      { name: "K_K07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K07_01.mp3", url: "audio/genki1/ch07/V_K07_01.mp3" },
      { name: "R_K07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y07_01.mp3", url: "audio/genki1/ch07/V_Y07_01.mp3" },
      { name: "R_Y07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "08": [
      { name: "K_K08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K08_01.mp3", url: "audio/genki1/ch08/V_K08_01.mp3" },
      { name: "R_K08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y08_01.mp3", url: "audio/genki1/ch08/V_Y08_01.mp3" },
      { name: "R_Y08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "09": [
      { name: "K_K09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K09_01.mp3", url: "audio/genki1/ch09/V_K09_01.mp3" },
      { name: "R_K09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y09_01.mp3", url: "audio/genki1/ch09/V_Y09_01.mp3" },
      { name: "R_Y09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "10": [
      { name: "K_K10_01.mp3", url: "https://drive.google.com/file/d/1Q7CmYLUHndinzhsMRO6VHvBhu3MV8jF0/preview" },
      { name: "K_K10_02.mp3", url: "https://drive.google.com/file/d/1oh_tb0qK9tpX2GErcDPgiokSZnHzoqpO/preview" },
      { name: "K_K10_03.mp3", url: "https://drive.google.com/file/d/1yuSszvoDIuv2m3G2vOKFOnyHnE74tUwy/preview" },
      { name: "K_K10_04.mp3", url: "https://drive.google.com/file/d/1apDnUBA4VUpQZJhxm-1d49A00GlwpZ8d/preview" },
      { name: "K_K10_05.mp3", url: "https://drive.google.com/file/d/1uMXNQdfU21sZjouDIOHvqp0x3bqHQNmA/preview" },
      { name: "K_K10_06.mp3", url: "https://drive.google.com/file/d/1rTWy6oxLAGhEjpr1Lbu9-haHAybs2F5x/preview" },
      { name: "K_K10_07.mp3", url: "https://drive.google.com/file/d/1BbxqVbVmEu9sBKI2guRW6ShMtsa-ccoj/preview" },
      { name: "K_K10_08.mp3", url: "https://drive.google.com/file/d/1wgPl4LGXeKw6mpBrQ1-ATnkdSJ6CJHFx/preview" },
      { name: "K_K10_09.mp3", url: "https://drive.google.com/file/d/1V4HAPO5n_thrPhafURln4ed8U8fMtF4U/preview" },
      { name: "K_K10_10.mp3", url: "https://drive.google.com/file/d/1BRxVMRdxODpEK7kndyW5id_EKyU0lwRo/preview" },
      { name: "K_K10_11.mp3", url: "https://drive.google.com/file/d/1C1fbzAUjC7LT1dnTBX12t8cXRivv-x-x/preview" },
      { name: "K_K10_12.mp3", url: "https://drive.google.com/file/d/1bEhgr_RcQlOKiaebfT1vvcSqBDx718bn/preview" },
      { name: "K_K10_13.mp3", url: "https://drive.google.com/file/d/1_NXSPnUxnjFV6qGI6XUC3fUUMwAANy81/preview" },
      { name: "K_K10_14.mp3", url: "https://drive.google.com/file/d/1nG0U5WHhG1x-ildk-m_MP9px2IHW70aI/preview" },
      { name: "K_K10_15.mp3", url: "https://drive.google.com/file/d/1ucmmJ6mb_NIm5fbkYP2Fgzwg5PTbm5BR/preview" },
      { name: "V_K10_01.mp3", url: "audio/genki1/ch10/V_K10_01.mp3" },
      { name: "R_K10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y10_01.mp3", url: "https://drive.google.com/file/d/1Vz69nog5Yf62jFk6zji4d27gbLOOSXQP/preview" },
      { name: "V_Y10_01.mp3", url: "audio/genki1/ch10/V_Y10_01.mp3" },
      { name: "R_Y10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "11": [
      { name: "K_K11_01.mp3", url: "https://drive.google.com/file/d/1Rj6rEF-ojfY705_E1OAnOrtV7hniw2Az/preview" },
      { name: "K_K11_02.mp3", url: "https://drive.google.com/file/d/1zx8iocwPP_8NY7eZU_4nFGLDKMBR1izj/preview" },
      { name: "K_K11_03.mp3", url: "https://drive.google.com/file/d/1JntNvFeUReXic3dsTSxBHZy0_mZSpmKX/preview" },
      { name: "K_K11_04.mp3", url: "https://drive.google.com/file/d/1fcl9adKoRsBSVI9_lFqXO6s-0dhkGvwK/preview" },
      { name: "K_K11_05.mp3", url: "https://drive.google.com/file/d/1IoPXZh5A4Gfex0R0igFcSobN2zMUed7R/preview" },
      { name: "K_K11_06.mp3", url: "https://drive.google.com/file/d/1Kjb00mvAwqRm_-6GxTqJDQMUB1DBb9i_/preview" },
      { name: "K_K11_07.mp3", url: "https://drive.google.com/file/d/1xaRzW5aBm6vska71D7GYE54z-iEkxf5q/preview" },
      { name: "K_K11_08.mp3", url: "https://drive.google.com/file/d/1T1_kwlHh_4-KmpzN1jJvRtdmJWmu_Yzv/preview" },
      { name: "K_K11_09.mp3", url: "https://drive.google.com/file/d/1J9F3HTIqYEdke7tQQSvT7HLISGdLlNIs/preview" },
      { name: "K_K11_10.mp3", url: "https://drive.google.com/file/d/1915RWju60ldBX92c6KaYtEZKKT1eEwhr/preview" },
      { name: "K_K11_11.mp3", url: "https://drive.google.com/file/d/16UfpVcXpQhSVUICB1tqkO_BPais5AYCw/preview" },
      { name: "K_K11_12.mp3", url: "https://drive.google.com/file/d/1Vpqt7BQ-7NJQl0zO29Ei4vyWStTwLidS/preview" },
      { name: "K_K11_13.mp3", url: "https://drive.google.com/file/d/1SnlZL3baXtBkBhOpLUGElSsSgFCifCSP/preview" },
      { name: "K_K11_14.mp3", url: "https://drive.google.com/file/d/1xHrB_uM8v6lLTKmcPYhMhbIOZhiPITFX/preview" },
      { name: "V_K11_01.mp3", url: "audio/genki1/ch11/V_K11_01.mp3" },
      { name: "R_K11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y11_01.mp3", url: "https://drive.google.com/file/d/1047CLg3V2WVBrpy6_pcNi5TNYhHrYyAZ/preview" },
      { name: "K_Y11_02.mp3", url: "https://drive.google.com/file/d/1l1tZJxjz7wHz156oUtyTzSTyNnCCXNMb/preview" },
      { name: "V_Y11_01.mp3", url: "audio/genki1/ch11/V_Y11_01.mp3" },
      { name: "R_Y11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "12": [
      { name: "K_K12_01.mp3", url: "https://drive.google.com/file/d/1QmYJ-Ih8qKgSZ-Nn_YC9Pv9bi1rpTyO0/preview" },
      { name: "K_K12_02.mp3", url: "https://drive.google.com/file/d/1lx4laXQC6XdUBRxy49BoM4u5mhn7BrqQ/preview" },
      { name: "K_K12_03.mp3", url: "https://drive.google.com/file/d/1YNXRQmUxG7r2FN-0lgBrVGhOmWC8RZy7/preview" },
      { name: "K_K12_04.mp3", url: "https://drive.google.com/file/d/1kKrBaHncsAeNz_sD6hYbQDwBAhIvWdHo/preview" },
      { name: "K_K12_05.mp3", url: "https://drive.google.com/file/d/1TNnJVkFrSeznI1aMP92VP6z-CouDVtwb/preview" },
      { name: "K_K12_06.mp3", url: "https://drive.google.com/file/d/1eg1q7DwmDHuqJoa6vzT6PtR1QeRi15zF/preview" },
      { name: "K_K12_07.mp3", url: "https://drive.google.com/file/d/1oNrPtLbQFwVKGMRKm3wlK8kWcJgvY7yO/preview" },
      { name: "K_K12_08.mp3", url: "https://drive.google.com/file/d/1wgPl4LGXeKw6mpBrQ1-ATnkdSJ6CJHFx/preview" },
      { name: "K_K12_09.mp3", url: "https://drive.google.com/file/d/19YVhkIrQkatsEgNrOTdCc54QIF2ijla8/preview" },
      { name: "K_K12_10.mp3", url: "https://drive.google.com/file/d/1ge-afbjxsMHjwC_L4Oo0p8nq0c2FbHsP/preview" },
      { name: "K_K12_11.mp3", url: "https://drive.google.com/file/d/1FD2UUwhv_UVWGTFEKNN5cf60LNZl4qGG/preview" },
      { name: "K_K12_12.mp3", url: "https://drive.google.com/file/d/1ruTOLUep2LeUZZe9-qX7TrrDbPHT1MLl/preview" },
      { name: "K_K12_13.mp3", url: "https://drive.google.com/file/d/1COWhM2ehomtXn_geB_NrU26Tb5oddIYn/preview" },
      { name: "K_K12_14.mp3", url: "https://drive.google.com/file/d/1pqie16hvkK3aWr5R6CC7yn7HUV0EOZ2b/preview" },
      { name: "V_K12_01.mp3", url: "audio/genki1/ch12/V_K12_01.mp3" },
      { name: "R_K12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y12_01.mp3", url: "https://drive.google.com/file/d/1ti8tcyioaOL23kLzCMfa1rl1hXqWggiI/preview" },
      { name: "V_Y12_01.mp3", url: "audio/genki1/ch12/V_Y12_01.mp3" },
      { name: "R_Y12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
  },

  // ════════════════════════════════
  //  GENKI I — WORKBOOK
  // ════════════════════════════════
  genki1_workbook: {
    "01": [
      { name: "WK01_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY01_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "02": [
      { name: "WK02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY02_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "03": [
      { name: "WK03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY03_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "04": [
      { name: "WK04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY04_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "05": [
      { name: "WK05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY05_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "06": [
      { name: "WK06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY06_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "07": [
      { name: "WK07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY07_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "08": [
      { name: "WK08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY08_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "09": [
      { name: "WK09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY09_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "10": [
      { name: "WK10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY10_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "11": [
      { name: "WK11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY11_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "12": [
      { name: "WK12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY12_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
  },

  // ════════════════════════════════
  //  GENKI II — TEXTBOOK
  // ════════════════════════════════
  genki2_textbook: {
    "13": [
      { name: "K_K13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K13_01.mp3", url: "audio/genki2/ch13/V_K13_01.mp3" },
      { name: "R_K13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y13_01.mp3", url: "audio/genki2/ch13/V_Y13_01.mp3" },
      { name: "R_Y13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "14": [
      { name: "K_K14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K14_01.mp3", url: "audio/genki2/ch14/V_K14_01.mp3" },
      { name: "R_K14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y14_01.mp3", url: "audio/genki2/ch14/V_Y14_01.mp3" },
      { name: "R_Y14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "15": [
      { name: "K_K15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K15_01.mp3", url: "audio/genki2/ch15/V_K15_01.mp3" },
      { name: "R_K15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y15_01.mp3", url: "audio/genki2/ch15/V_Y15_01.mp3" },
      { name: "R_Y15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "16": [
      { name: "K_K16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K16_01.mp3", url: "audio/genki2/ch16/V_K16_01.mp3" },
      { name: "R_K16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y16_01.mp3", url: "audio/genki2/ch16/V_Y16_01.mp3" },
      { name: "R_Y16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "17": [
      { name: "K_K17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K17_01.mp3", url: "audio/genki2/ch17/V_K17_01.mp3" },
      { name: "R_K17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y17_01.mp3", url: "audio/genki2/ch17/V_Y17_01.mp3" },
      { name: "R_Y17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "18": [
      { name: "K_K18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K18_01.mp3", url: "audio/genki2/ch18/V_K18_01.mp3" },
      { name: "R_K18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y18_01.mp3", url: "audio/genki2/ch18/V_Y18_01.mp3" },
      { name: "R_Y18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "19": [
      { name: "K_K19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K19_01.mp3", url: "audio/genki2/ch19/V_K19_01.mp3" },
      { name: "R_K19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y19_01.mp3", url: "audio/genki2/ch19/V_Y19_01.mp3" },
      { name: "R_Y19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "20": [
      { name: "K_K20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K20_01.mp3", url: "audio/genki2/ch20/V_K20_01.mp3" },
      { name: "R_K20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y20_01.mp3", url: "audio/genki2/ch20/V_Y20_01.mp3" },
      { name: "R_Y20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "21": [
      { name: "K_K21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K21_01.mp3", url: "audio/genki2/ch21/V_K21_01.mp3" },
      { name: "R_K21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y21_01.mp3", url: "audio/genki2/ch21/V_Y21_01.mp3" },
      { name: "R_Y21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "22": [
      { name: "K_K22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K22_01.mp3", url: "audio/genki2/ch22/V_K22_01.mp3" },
      { name: "R_K22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y22_01.mp3", url: "audio/genki2/ch22/V_Y22_01.mp3" },
      { name: "R_Y22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "23": [
      { name: "K_K23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_K23_01.mp3", url: "audio/genki2/ch23/V_K23_01.mp3" },
      { name: "R_K23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "K_Y23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "V_Y23_01.mp3", url: "audio/genki2/ch23/V_Y23_01.mp3" },
      { name: "R_Y23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
  },

  // ════════════════════════════════
  //  GENKI II — WORKBOOK
  // ════════════════════════════════
  genki2_workbook: {
    "13": [
      { name: "WK13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY13_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "14": [
      { name: "WK14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY14_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "15": [
      { name: "WK15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY15_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "16": [
      { name: "WK16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY16_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "17": [
      { name: "WK17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY17_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "18": [
      { name: "WK18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY18_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "19": [
      { name: "WK19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY19_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "20": [
      { name: "WK20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY20_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "21": [
      { name: "WK21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY21_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "22": [
      { name: "WK22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY22_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
    "23": [
      { name: "WK23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
      { name: "WY23_01.mp3", url: "https://drive.google.com/file/d/REPLACE_ME/preview" },
    ],
  },
};
