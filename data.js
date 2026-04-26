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
      { name: "R_K01_14.mp3", url: "https://drive.google.com/file/d/1FDe-x7DQYjdupR31osAg615l2Vm7FwWs/view?usp=sharing" },
      { name: "R_K01_15.mp3", url: "https://drive.google.com/file/d/1Y49JzzC9GrqFaxnNTKBjzIiHKLVbi04H/view?usp=sharing" },
      { name: "R_K01_16.mp3", url: "https://drive.google.com/file/d/1YUgQTP6lyfyjDEJJQNxna2hoGIQNSw0j/view?usp=sharing" },
      { name: "R_K01_17.mp3", url: "https://drive.google.com/file/d/1PS-STA7x4yMXBW7NMnrnJFotW4RA3zzF/view?usp=sharing" },
      { name: "R_K01_18.mp3", url: "https://drive.google.com/file/d/1r4wD4PzClKlfJHKo044pYvhNP-YqwKbL/view?usp=sharing" },
      { name: "R_K01_19.mp3", url: "https://drive.google.com/file/d/1-0aGZJiFA1osPtx3wZ9NSs0m7rM5MxCB/view?usp=sharing" },
      { name: "R_K01_20.mp3", url: "https://drive.google.com/file/d/1E12HoYAYyW8WE2jyTMTq718ir1LdqSsk/view?usp=sharing" },
      { name: "R_K01_21.mp3", url: "https://drive.google.com/file/d/1k8wuMKuHDCQZfFSnaSd2cp2cBXpVxkmA/view?usp=sharing" },
      { name: "R_K01_22.mp3", url: "https://drive.google.com/file/d/1hIt55IxaRS2XTJJ4m_FNJG4YZ0D3RIeT/view?usp=sharing" },
      { name: "R_K01_23.mp3", url: "https://drive.google.com/file/d/1EdsyMeUbMkI9SidvZjcS0mtZH_3ifdhW/view?usp=sharing" },
      { name: "R_K01_24.mp3", url: "https://drive.google.com/file/d/1_Kf1uV9eFR1dv-itd5V-X1PMi1XSpq4W/view?usp=sharing" },

      { name: "Y01_1.mp3", url: "https://drive.google.com/file/d/1COlDiBnH8UJRlZePF-zGgljqTdchp04_/view?usp=drivesdk" },
      { name: "Y01_2.mp3", url: "https://drive.google.com/file/d/1bzeSRBFXZAYQTTONOfkRDFzr0DqriLf_/view?usp=drivesdk" },
      { name: "Y01_3.mp3", url: "https://drive.google.com/file/d/1px-lm5-OiSit5FYhtMfi0UUEaIBtOL51/view?usp=drivesdk" },
      { name: "Y01_4.mp3", url: "https://drive.google.com/file/d/17PPNBvMWW78pBV2daNn308HxPdcnJqqk/view?usp=drivesdk" },
      { name: "Y01_5.mp3", url: "https://drive.google.com/file/d/1F-FYnTUdQ9uIxbG-1iRN2nnnQAlOU--_/view?usp=drivesdk" },
      { name: "Y01_6.mp3", url: "https://drive.google.com/file/d/1GNPdeqIs9sfDwfROBbQxq6dD853eLePs/view?usp=drivesdk" },
      
      
    ],

    "02": [
      { name: "K_K02_01.mp3", url: "https://drive.google.com/file/d/19R9JTqWxqjEKRPfgQCwVA4AvCsXFf9nc/view?usp=sharing" },
      { name: "K_K02_02.mp3", url: "https://drive.google.com/file/d/1sv-dKI6V6Fq8Nrs1T4sKPDtEAETBPA77/view?usp=sharing" },
      { name: "K_K02_03.mp3", url: "https://drive.google.com/file/d/1oa3jxR_VskE8Ty7MeXJ0h5b-K2yyWz7X/view?usp=sharing" },
      { name: "K_K02_04.mp3", url: "https://drive.google.com/file/d/1_D2keiuuwgnfbRlBKzeXfFz8IUV3_Ww_/view?usp=sharing" },

      { name: "V_K02_05.mp3",    url: "audio/genki1/ch02/K02_05.mp3" },
      { name: "V_K02_06.mp3",    url: "audio/genki1/ch02/K02_06.mp3" },

      { name: "R_K02_07.mp3", url: "https://drive.google.com/file/d/1Pw_ER2MpjDr1AQ5_LD_BTzvgaogqYELM/view?usp=sharing" },
      { name: "R_K02_08.mp3", url: "https://drive.google.com/file/d/11KgI7PrYwkEVRxKXGK6N81AD9-0NDxcy/view?usp=sharing" },
      { name: "R_K02_09.mp3", url: "https://drive.google.com/file/d/1ecg6KPMPqv_gnoj8ZCSMNE7P2eSDLg6N/view?usp=sharing" },
      { name: "R_K02_10.mp3", url: "https://drive.google.com/file/d/16FLFMxMvK1hSRkkAXoCE6hz6X_agrIa4/view?usp=sharing" },
      { name: "R_K02_11.mp3", url: "https://drive.google.com/file/d/1ldB79ZT_FpSMRsFBs1XczAYMUR_Z79e2/view?usp=sharing" },
      { name: "R_K02_12.mp3", url: "https://drive.google.com/file/d/1EoQFcMET-4GjEdTsZ0QwQi3sKzoa_yMo/view?usp=sharing" },
      { name: "R_K02_13.mp3", url: "https://drive.google.com/file/d/1PuJ0rkGAAMcyo5WZyxR6mo6mKcqzVIDB/view?usp=sharing" },
      { name: "R_K02_14.mp3", url: "https://drive.google.com/file/d/1wiGc6uvY_MflJqH3MP_tOQcOiqutdZQO/view?usp=sharing" },
      { name: "R_K02_15.mp3", url: "https://drive.google.com/file/d/1gfZIlbyBm53IVKuZRqHWwEz-ObscPq-v/view?usp=sharing" },

      { name: "Y02_1.mp3", url: "https://drive.google.com/file/d/1X4ab8IC2BRJT4LioRDqyl6wGAvtXbfy-/view?usp=drivesdk" },
      { name: "Y02_2.mp3", url: "https://drive.google.com/file/d/1O_xMu-Wk6-TictuD1KpUgOBi0Fuec49n/view?usp=drivesdk" },
      { name: "Y02_3.mp3", url: "https://drive.google.com/file/d/1oLA6LW-twBpI6QlSdAwv1vHJ-ZxQXS8R/view?usp=drivesdk" },
      
    ],

    "03": [
      { name: "K_K03_01.mp3", url: "https://drive.google.com/file/d/1xQeFt-6xfLUDymslpKp6XBZY9UVnWSoa/view?usp=sharing" },
      { name: "K_K03_02.mp3", url: "https://drive.google.com/file/d/1U6opaQe7_5guztb3YWKl6D_GObQLVvBQ/view?usp=sharing" },
      { name: "K_K03_03.mp3", url: "https://drive.google.com/file/d/1MWY8KcX1b8eWYQC90AwGzOtgR70GyTof/view?usp=sharing" },
      { name: "K_K03_04.mp3", url: "https://drive.google.com/file/d/1YvwJogG4gOhZOQYSP7y6H2h1yfVzCTNi/view?usp=sharing" },

      { name: "V_K03_05.mp3",    url: "audio/genki1/ch03/K03_05.mp3" },
      { name: "V_K03_06.mp3",    url: "audio/genki1/ch03/K03_06.mp3" },

      { name: "R_K03_07.mp3", url: "https://drive.google.com/file/d/1CADo7GhEly3xAS_6tQ9KKzm6fPLtly3l/view?usp=sharing" },
      { name: "R_K03_08.mp3", url: "https://drive.google.com/file/d/1rRozd84wGHL6v9--TjeFBiE5_tJwdBDn/view?usp=sharing" },
      { name: "R_K03_09.mp3", url: "https://drive.google.com/file/d/1tX270v4ATmYbh1qRhrQaXY0pWLp8z-HL/view?usp=sharing" },
      { name: "R_K03_10.mp3", url: "https://drive.google.com/file/d/1A1dpSGnRgZIG8q0ofxufM2DDQW2HKgum/view?usp=sharing" },
      { name: "R_K03_11.mp3", url: "https://drive.google.com/file/d/1UtOIVqX3ZDFPeSAWYmKqza4Jik5wUwDF/view?usp=sharing" },
      { name: "R_K03_12.mp3", url: "https://drive.google.com/file/d/1Y9IKT5NQKqYXJc4ZFspjqc3U9X8LplIN/view?usp=sharing" },
      { name: "R_K03_13.mp3", url: "https://drive.google.com/file/d/1yYHhTmgdpzcMtHhHmEnwTdHXezyDd8T6/view?usp=sharing" },
      { name: "R_K03_14.mp3", url: "https://drive.google.com/file/d/1uOYg6_M1yfyC2omx3n27uwxKzzjmPpWD/view?usp=sharing" },
      { name: "R_K03_15.mp3", url: "https://drive.google.com/file/d/175h03PsihpJCPhWa5XdeVxRFL438uj4J/view?usp=sharing" },

      { name: "Y03.mp3", url: "https://drive.google.com/file/d/1nPum45-lO8G5DOq9T5qyU82Jfm79phpy/view?usp=drivesdk" },
      
    ],

    "04": [
      { name: "K_K04_01.mp3", url: "https://drive.google.com/file/d/14PoV_kC8MkkpBbFJfb0Uc52HAYHG7NY_/view?usp=sharing" },
      { name: "K_K04_02.mp3", url: "https://drive.google.com/file/d/1rJ29gRVSvkZ3UBQ0tW1m7NdnRVOfuSZl/view?usp=sharing" },
      { name: "K_K04_03.mp3", url: "https://drive.google.com/file/d/1gB0-CH1NKiPfSsyP47KYLAc3PhQO4JVS/view?usp=sharing" },
      { name: "K_K04_04.mp3", url: "https://drive.google.com/file/d/1Yb9UPZ4ce2FuQCmpD7KGzehp_56iNtZv/view?usp=sharing" },
      { name: "K_K04_05.mp3", url: "https://drive.google.com/file/d/1dswlJExnMArtq-1AN2Z7yTx0RndqkKBC/view?usp=sharing" },
      { name: "K_K04_06.mp3", url: "https://drive.google.com/file/d/14m9ZHsM4EugQamu7RtrYcIhVTYVOeYfR/view?usp=sharing" },

      { name: "V_K04_07.mp3",    url: "audio/genki1/ch04/K04_07.mp3" },
      { name: "V_K04_08.mp3",    url: "audio/genki1/ch04/K04_08p3" },

      { name: "R_K04_09.mp3", url: "https://drive.google.com/file/d/10C3eYVnCl4mjGqi0LGslO9ebaJtU-1Fk/view?usp=sharing" },
      { name: "R_K04_10.mp3", url: "https://drive.google.com/file/d/12WDlRj4Te8xEklfpZ-tfabkWJXp_kro1/view?usp=sharing" },
      { name: "R_K04_11.mp3", url: "https://drive.google.com/file/d/1JbfhZ9QL9Oh-FZxE1MoELjDfRiL2t2zT/view?usp=drivesdk" },
      { name: "R_K04_12.mp3", url: "https://drive.google.com/file/d/1-LTJ4LlU1phZQWH9K7qwzQWwtyA6hmZO/view?usp=drivesdk" },
      { name: "R_K04_13.mp3", url: "https://drive.google.com/file/d/16qYd7kylr9JRB0kTSznxKaumVXVXNIXf/view?usp=drivesdk" },
      { name: "R_K04_14.mp3", url: "https://drive.google.com/file/d/1WEPmr5cUVdOj9UPLJDL39hhW6as0zXSi/view?usp=drivesdk" },
      { name: "R_K04_15.mp3", url: "https://drive.google.com/file/d/1dUpI074QuHqi4O0jwvKfNQkU8DtlyUuZ/view?usp=drivesdk" },
      { name: "R_K04_16.mp3", url: "https://drive.google.com/file/d/1bWZWMtvyveZiEPT46td1FZlWt_iK2BB-/view?usp=drivesdk" },
      { name: "R_K04_17.mp3", url: "https://drive.google.com/file/d/1jqzJqUevwkWU2AFCojKiuusw2wQ60-s6/view?usp=drivesdk" },
      { name: "R_K04_18.mp3", url: "https://drive.google.com/file/d/1tTTlbPyRVSOp6c19XLLcB_-Lt_q7hrhb/view?usp=drivesdk" },
      { name: "R_K04_19.mp3", url: "https://drive.google.com/file/d/14SdFI4bQhY5X-D3-gAnOfUb3IAgGk0YS/view?usp=drivesdk" },

     { name: "Y04.mp3", url: "https://drive.google.com/file/d/1PYdKZu0X1xpiP8HMxQm8SMLEaQv_Nn6o/view?usp=drivesdk" },
      
    ],

    "05": [

      { name: "K_K05_01.mp3", url: "https://drive.google.com/file/d/1-n_YackDqBe5T15dNz6IAuKBT_BEOOse/view?usp=drivesdk" },
      { name: "K_K05_02.mp3", url: "https://drive.google.com/file/d/10FXbEPcYThWvuCS2jevQF0_a4k4DFBUR/view?usp=drivesdk" },
      { name: "K_K05_03.mp3", url: "https://drive.google.com/file/d/1unVrQGa-O8VnsPBKT654qfTPS9HHhn2H/view?usp=drivesdk" },
      { name: "K_K05_04.mp3", url: "https://drive.google.com/file/d/1tp5qkyPRe36N5m6gbINJ2KbTSXQn-zLr/view?usp=drivesdk" },
      { name: "K_K05_05.mp3", url: "https://drive.google.com/file/d/1OXyXNnfiybcHocY4gRCoSqp1zIg2p8qh/view?usp=drivesdk" },
      { name: "K_K05_06.mp3", url: "https://drive.google.com/file/d/1kBBOrjvaJINXRtzWiruf5NHzTEKxINE6/view?usp=drivesdk" },

      { name: "V_K05_07.mp3",    url: "audio/genki1/ch05/K05_07.mp3" },
      { name: "V_K05_08.mp3",    url: "audio/genki1/ch05/K05_08.mp3" },
     
      { name: "R_K05_09.mp3", url: "https://drive.google.com/file/d/1IKZyyeNvHViyzV0g0vFoug713xHeb2eL/view?usp=drivesdk" },
      { name: "R_K05_10.mp3", url: "https://drive.google.com/file/d/1B97ncifFI2fnyWmy2104JnSVgcsfT5DP/view?usp=drivesdk" },
      { name: "R_K05_11.mp3", url: "https://drive.google.com/file/d/1337tceNz5rz7EUewK27Q7VE70gZGed4L/view?usp=drivesdk" },
      { name: "R_K05_12.mp3", url: "https://drive.google.com/file/d/1epgX78UlPth6YDIoVYtiRk_gAOly2uq1/view?usp=drivesdk" },
      { name: "R_K05_13.mp3", url: "https://drive.google.com/file/d/1rJh-uzlf9GiEvue3VvVNi5g63opu-uGE/view?usp=drivesdk" },
      { name: "R_K05_14.mp3", url: "https://drive.google.com/file/d/16B9zWC7VyA5gsfVmDnMxYlpXw6ACSjUP/view?usp=drivesdk" },
      { name: "R_K05_15.mp3", url: "https://drive.google.com/file/d/11PWkVerlP9Boptzc_R-u4XCfEs44qUZv/view?usp=drivesdk" },
      { name: "R_K05_16.mp3", url: "https://drive.google.com/file/d/1YrYglVM5yjvTcxb8TmtLp1Tfek5MfaHp/view?usp=drivesdk" },

      { name: "Y05_1.mp3", url: "https://drive.google.com/file/d/1SBqwCQyMvj1cEoHzVo42DkQRywMrs9Ka/view?usp=drivesdk" },
      { name: "Y05_2.mp3", url: "https://drive.google.com/file/d/1psGZOxzFyU8yktFltiSZAMlSrzuTpbCv/view?usp=drivesdk" },
      
    ],

    "06": [
      { name: "K_K06_01.mp3", url: "https://drive.google.com/file/d/11ciR8vS6R84YGagMn1-3h52JUSL_yqJl/view?usp=drivesdk" },
      { name: "K_K06_02.mp3", url: "https://drive.google.com/file/d/1L7cVqmy3X0yP39SSC_LHAwNMS_A9nBzg/view?usp=drivesdk" },
      { name: "K_K06_03.mp3", url: "https://drive.google.com/file/d/13DDc6Tx7Ppdyr0QdbVKq8mYyPc-U_vs1/view?usp=drivesdk" },
      { name: "K_K06_04.mp3", url: "https://drive.google.com/file/d/16aui6knx2Tc6H_fmk3MUhKHvmynksGjI/view?usp=drivesdk" },
      { name: "K_K06_05.mp3", url: "https://drive.google.com/file/d/1VhncnvUJll1OApDV0FH83rQ_veCbb-mY/view?usp=drivesdk" },
      { name: "K_K06_06.mp3", url: "https://drive.google.com/file/d/1Z7jaAtshzc4UV6cnTLcjLxKKqm7VFkAD/view?usp=drivesdk" },

      { name: "V_K06_07.mp3",    url: "audio/genki1/ch06/K06_07.mp3" },
      { name: "V_K06_08.mp3",    url: "audio/genki1/ch06/K06_08.mp3" },

      { name: "R_K06_09.mp3", url: "https://drive.google.com/file/d/1E2_VE7rQOHRxxHa7329f6BqhTDR46y2B/view?usp=drivesdk" },
      { name: "R_K06_10.mp3", url: "https://drive.google.com/file/d/1K2xt1a39bZgzMaZ4uK7dVvYWUZDb5sRA/view?usp=drivesdk" },
      { name: "R_K06_11.mp3", url: "https://drive.google.com/file/d/1lvwWoHxnSAUc6Y9jJHxjvBvuOiHA_JK2/view?usp=drivesdk" },
      { name: "R_K06_12.mp3", url: "https://drive.google.com/file/d/1cl2-RFYTql6BPo2QYMd9OGTubNLtNlza/view?usp=drivesdk" },
      { name: "R_K06_13.mp3", url: "https://drive.google.com/file/d/12-_AgB9CI4ngmY2yzmJSp6kxlSE6XpEW/view?usp=drivesdk" },
      { name: "R_K06_14.mp3", url: "https://drive.google.com/file/d/1fIdI1Hl4EEGw76iZRvezm_Xk9V66b5_P/view?usp=drivesdk" },
      { name: "R_K06_15.mp3", url: "https://drive.google.com/file/d/1JAxD6fsUAHus8udmoU8h6OH6JsDN8VIu/view?usp=drivesdk" },

      { name: "Y06.mp3", url: "https://drive.google.com/file/d/1d39SsC1QV7YGovCCedRCh5oKEwOKWO5d/view?usp=drivesdk" },
      
    ],

    "07": [
      { name: "K07_01.mp3", url: "https://drive.google.com/file/d/1ZCQTvubtNkpqUsteA8fg0-LT6iovXp0_/view?usp=drivesdk" },
      { name: "K07_02.mp3", url: "https://drive.google.com/file/d/1utBOOYHm2KU3vQhpe2QKLyjW_7rR9bV_/view?usp=drivesdk" },
      { name: "K07_03.mp3", url: "https://drive.google.com/file/d/1CYnFclKYqJUeqx6UJlecWTKUUD8vUdIi/view?usp=drivesdk" },
      { name: "K07_04.mp3", url: "https://drive.google.com/file/d/1Z6boxf59B7H6t7Ej1u7-OVOnTSxlS5Zf/view?usp=drivesdk" },

      { name: "V_K07_05.mp3",    url: "audio/genki1/ch07/K07_05.mp3" },
      { name: "V_K07_06.mp3",    url: "audio/genki1/ch07/K07_06.mp3" },
      
      { name: "R_K07_07.mp3", url: "https://drive.google.com/file/d/1GZeIFJt24SxQuG9ul6_TJLLdqOTBNeED/view?usp=drivesdk" },
      { name: "R_K07_08.mp3", url: "https://drive.google.com/file/d/1xziecYP5zbznPET5F3mPtRN9UrpubQVN/view?usp=drivesdk" },
      { name: "R_K07_09.mp3", url: "https://drive.google.com/file/d/1_HIyeFJtKNt2SuaL317leQePn9uB5J9J/view?usp=drivesdk" },
      { name: "R_K07_10.mp3", url: "https://drive.google.com/file/d/1ypJ2dRdyj5Ec4xWA6WiwAuIr1hlhT3jv/view?usp=drivesdk" },
      { name: "R_K07_11.mp3", url: "https://drive.google.com/file/d/1pkzU1oRquKYXygN1EbIce83q3EQT1hop/view?usp=drivesdk" },
      { name: "R_K07_12.mp3", url: "https://drive.google.com/file/d/1W-jf5FuJ5PvoXVjqLFf771_rZLjjeLgp/view?usp=drivesdk" },
      { name: "R_K07_13.mp3", url: "https://drive.google.com/file/d/1mCAveGXtdUjTflZlBPEnUHDpeJcgVwo5/view?usp=drivesdk" },
      { name: "R_K07_14.mp3", url: "https://drive.google.com/file/d/1hvhhiPKLqQnCjeJ6-K4XBcgkeAqBwC_O/view?usp=drivesdk" },

      { name: "Y07.mp3", url: "https://drive.google.com/file/d/168lvF4F6ScuJkyAQTIQxZegXqUam2qEx/view?usp=drivesdk" },
      
    ],

    "08": [
      { name: "K08_01.mp3", url: "https://drive.google.com/file/d/1OhL_-QokeitYnDyV1QPNnoUWAYCNdaL0/view?usp=drivesdk" },
      { name: "K08_02.mp3", url: "https://drive.google.com/file/d/1NMPgWfrGNZn_hZHDDsgUl3RPaLBM84WJ/view?usp=drivesdk" },
      { name: "K08_03.mp3", url: "https://drive.google.com/file/d/1BmnM_WxiyByf0sDIyv0ZKcJ4VWlLAeHF/view?usp=drivesdk" },
      { name: "K08_04.mp3", url: "https://drive.google.com/file/d/1dx63-q8KCTZoUZ13FfrDGhxAMBDOOFak/view?usp=drivesdk" },

      { name: "V_K08_05.mp3",    url: "audio/genki1/ch08/K08_05.mp3" },
      { name: "V_K08_06.mp3",    url: "audio/genki1/ch08/K08_06.mp3" },
      
      { name: "R_K08_07.mp3", url: "https://drive.google.com/file/d/1o9IhT2MHT4bZYsF1OOt_PGK3IjIJ6asN/view?usp=drivesdk" },
      { name: "R_K08_08.mp3", url: "https://drive.google.com/file/d/15q6SKFo8eWUyRIlosremdNXWGOjSHs45/view?usp=drivesdk" },
      { name: "R_K08_09.mp3", url: "https://drive.google.com/file/d/1c-vBdoEV8X0LvcEfaNqY1QyKuT1xeiDF/view?usp=drivesdk" },
      { name: "R_K08_10.mp3", url: "https://drive.google.com/file/d/1RNegyLxf21xb3YK2l8gRcLjdIJlFRYjH/view?usp=drivesdk" },
      { name: "R_K08_11.mp3", url: "https://drive.google.com/file/d/1RekK6T7Zubfw3vVOWhV5XSanY5_kD7_4/view?usp=drivesdk" },
      { name: "R_K08_12.mp3", url: "https://drive.google.com/file/d/1jRlKw664YIjqFWDKSGuLux4jRj4VZ9on/view?usp=drivesdk" },
      { name: "R_K08_13.mp3", url: "https://drive.google.com/file/d/1XDnm4Mj4ly7zYU_mUPZdBkUrDYj1ycVr/view?usp=drivesdk" },
      { name: "R_K08_14.mp3", url: "https://drive.google.com/file/d/1NxLfjw1x9PNDnr8UG3xJNAFrDLpzL7Rj/view?usp=drivesdk" },
      { name: "R_K08_15.mp3", url: "https://drive.google.com/file/d/16eG1LdgP2ZPRhHbrjfq_4frkpnLvqpzp/view?usp=drivesdk" },
      { name: "R_K08_16.mp3", url: "https://drive.google.com/file/d/12NcmDE_AS79GQ13kxL2KGxV-p-fbM9rq/view?usp=drivesdk" },
      { name: "R_K08_17.mp3", url: "https://drive.google.com/file/d/14uSBaavNpgYuuSK4hHuMIl5HsBGOOS_B/view?usp=drivesdk" },
      { name: "R_K08_18.mp3", url: "https://drive.google.com/file/d/1sZpiWn1mD9QTO2ewVda4WjLeXZv85bzo/view?usp=drivesdk" },

      { name: "Y08.mp3", url: "https://drive.google.com/file/d/1h4-3je0HXwyoI2HVpYiPQW742DDg3glz/view?usp=drivesdk" },
      
    ],

    "09": [
      { name: "K09_01.mp3", url: "https://drive.google.com/file/d/1_5VYN_53umxSrbZjdvDUM0zo7c4loRyb/view?usp=drivesdk" },
      { name: "K09_02.mp3", url: "https://drive.google.com/file/d/1FpCmW_o4DB_D0K7emrFuSydwxSbmdt5B/view?usp=drivesdk" },
      { name: "K09_03.mp3", url: "https://drive.google.com/file/d/1vHa40sSjWRQS8dHBcCvWz3YQhKSsyoZR/view?usp=drivesdk" },
      { name: "K09_04.mp3", url: "https://drive.google.com/file/d/1y_FOqsPRL5v-S1-7x4qbN188DQfK6MeZ/view?usp=drivesdk" },
      { name: "K09_05.mp3", url: "https://drive.google.com/file/d/1W-4x-46ExoVdkh-JHFgfaJUgdLFtulEg/view?usp=drivesdk" },
      { name: "K09_06.mp3", url: "https://drive.google.com/file/d/1Z7JdxX2IHfbYBf0unBDtRdIQixxQa1Ib/view?usp=drivesdk" },
      
      { name: "V_K09_07.mp3",    url: "audio/genki1/ch09/K09_07.mp3" },
      { name: "V_K09_08.mp3",    url: "audio/genki1/ch09/K09_08.mp3" },
      
      { name: "R_K09_09.mp3", url: "https://drive.google.com/file/d/1OIcxj_lnuM1BWsYbCoKRK2V35OHehatr/view?usp=drivesdk" },
      { name: "R_K09_10.mp3", url: "https://drive.google.com/file/d/1GQ036PjQwRMdndHLQI9OK8L9ifaVlMX8/view?usp=drivesdk" },
      { name: "R_K09_11.mp3", url: "https://drive.google.com/file/d/1QtzOzvPRO0MuMnYYGTZ7kFmVqyYQOBmX/view?usp=drivesdk" },
      { name: "R_K09_12.mp3", url: "https://drive.google.com/file/d/1jIXumVQEkeHKTNqENm4Umln5N7oZARk6/view?usp=drivesdk" },
      { name: "R_K09_13.mp3", url: "https://drive.google.com/file/d/1nBCDKNfHqdhl3kolFrs3eD6qi3z3FZ0U/view?usp=drivesdk" },
      { name: "R_K09_14.mp3", url: "https://drive.google.com/file/d/1_D-fWKOobPOi3ErmWITd9ZOmC23INzs6/view?usp=drivesdk" },
      { name: "R_K09_15.mp3", url: "https://drive.google.com/file/d/1DC9_81pXXDS4lO5VZACX6xJcqHqv3dHl/view?usp=drivesdk" },
      { name: "R_K09_16.mp3", url: "https://drive.google.com/file/d/1hSxOH2L-wSfH_AsIi3V0XE8WHcy4EU2f/view?usp=drivesdk" },
      { name: "R_K09_17.mp3", url: "https://drive.google.com/file/d/1oLeHKUME1ummeTjqWUBxmQAtC9PBQRQp/view?usp=drivesdk" },
      
      { name: "Y09_1.mp3", url: "https://drive.google.com/file/d/1CcMP_FeyUBELqz6jJ3zdelhZeqLbYLtG/view?usp=drivesdk" },
      { name: "Y09_2.mp3", url: "https://drive.google.com/file/d/1sQCwxn5p_SMUqTQfqrweudoAsPoPeTaF/view?usp=drivesdk" },
      
    ],

    "10": [
      { name: "K10_01.mp3", url: "https://drive.google.com/file/d/1Q7CmYLUHndinzhsMRO6VHvBhu3MV8jF0/view?usp=drivesdk" },
      { name: "K10_02.mp3", url: "https://drive.google.com/file/d/1oh_tb0qK9tpX2GErcDPgiokSZnHzoqpO/view?usp=drivesdk" },
      { name: "K10_03.mp3", url: "https://drive.google.com/file/d/1yuSszvoDIuv2m3G2vOKFOnyHnE74tUwy/view?usp=drivesdk" },
      { name: "K10_04.mp3", url: "https://drive.google.com/file/d/1apDnUBA4VUpQZJhxm-1d49A00GlwpZ8d/view?usp=drivesdk" },
      
      { name: "V_K10_05.mp3",    url: "audio/genki1/ch10/K10_05.mp3" },
      { name: "V_K10_06.mp3",    url: "audio/genki1/ch10/K10_06.mp3" },

      { name: "R_K10_07.mp3", url: "https://drive.google.com/file/d/1BbxqVbVmEu9sBKI2guRW6ShMtsa-ccoj/view?usp=drivesdk" },
      { name: "R_K10_08.mp3", url: "https://drive.google.com/file/d/1q4VtYLR1XYTI3mZB7JEGyn5p3h8owbFs/view?usp=drivesdk" },
      { name: "R_K10_09.mp3", url: "https://drive.google.com/file/d/1V4HAPO5n_thrPhafURln4ed8U8fMtF4U/view?usp=drivesdk" },
      { name: "R_K10_10.mp3", url: "https://drive.google.com/file/d/1BRxVMRdxODpEK7kndyW5id_EKyU0lwRo/view?usp=drivesdk" },
      { name: "R_K10_11.mp3", url: "https://drive.google.com/file/d/1C1fbzAUjC7LT1dnTBX12t8cXRivv-x-x/view?usp=drivesdk" },
      { name: "R_K10_12.mp3", url: "https://drive.google.com/file/d/1bEhgr_RcQlOKiaebfT1vvcSqBDx718bn/view?usp=drivesdk" },
      { name: "R_K10_13.mp3", url: "https://drive.google.com/file/d/1_NXSPnUxnjFV6qGI6XUC3fUUMwAANy81/view?usp=drivesdk" },
      { name: "R_K10_14.mp3", url: "https://drive.google.com/file/d/1nG0U5WHhG1x-ildk-m_PP9px2IHW70aI/view?usp=drivesdk" },
      { name: "R_K10_15.mp3", url: "https://drive.google.com/file/d/1ucmmJ6mb_NIm5fbkYP2Fgzwg5PTbm5BR/view?usp=drivesdk" },

      { name: "Y10.mp3", url: "https://drive.google.com/file/d/1Vz69nog5Yf62jFk6zji4d27gbLOOSXQP/view?usp=drivesdk" },
      
    ],

    "11": [
      { name: "K11_01.mp3", url: "https://drive.google.com/file/d/1Rj6rEF-ojfY705_E1OAnOrtV7hniw2Az/view?usp=drivesdk" },
      { name: "K11_02.mp3", url: "https://drive.google.com/file/d/1zx8iocwPP_8NY7eZU_4nFGLDKMBR1izj/view?usp=drivesdk" },
      { name: "K11_03.mp3", url: "https://drive.google.com/file/d/1JntNvFeUReXic3dsTSxBHZy0_mZSpmKX/view?usp=drivesdk" },
      { name: "K11_04.mp3", url: "https://drive.google.com/file/d/1fcl9adKoRsBSVI9_lFqXO6s-0dhkGvwK/view?usp=drivesdk" },
      { name: "K11_05.mp3", url: "https://drive.google.com/file/d/1IoPXZh5A4Gfex0R0igFcSobN2zMUed7R/view?usp=drivesdk" },
      { name: "K11_06.mp3", url: "https://drive.google.com/file/d/1Kjb00mvAwqRm_-6GxTqJDQMUB1DBb9i_/view?usp=drivesdk" },

      { name: "V_K11_07.mp3",    url: "audio/genki1/ch11/K11_07.mp3" },
      { name: "V_K11_08.mp3",    url: "audio/genki1/ch11/K11_08.mp3" },

      { name: "R_K11_09.mp3", url: "https://drive.google.com/file/d/1J9F3HTIqYEdke7tQQSvT7HLISGdLlNIs/view?usp=drivesdk" },
      { name: "R_K11_10.mp3", url: "https://drive.google.com/file/d/1915RWju60ldBX92c6KaYtEZKKT1eEwhr/view?usp=drivesdk" },
      { name: "R_K11_11.mp3", url: "https://drive.google.com/file/d/16UfpVcXpQhSVUICB1tqkO_BPais5AYCw/view?usp=drivesdk" },
      { name: "R_K11_12.mp3", url: "https://drive.google.com/file/d/1Vpqt7BQ-7NJQl0zO29Ei4vyWStTwLidS/view?usp=drivesdk" },
      { name: "R_K11_13.mp3", url: "https://drive.google.com/file/d/1SnlZL3baXtBkBhOpLUGElSsSgFCifCSP/view?usp=drivesdk" },
      { name: "R_K11_14.mp3", url: "https://drive.google.com/file/d/1xHrB_uM8v6lLTKmcPYhMhbIOZhiPITFX/view?usp=drivesdk" },

      { name: "Y11_1.mp3", url: "https://drive.google.com/file/d/1047CLg3V2WVBrpy6_pcNi5TNYhHrYyAZ/view?usp=drivesdk" },
      { name: "Y11_2.mp3", url: "https://drive.google.com/file/d/1l1tZJxjz7wHz156oUtyTzSTyNnCCXNMb/view?usp=drivesdk" },
      
    ],

    "12": [
      { name: "K12_01.mp3", url: "https://drive.google.com/file/d/1QmYJ-Ih8qKgSZ-Nn_YC9Pv9bi1rpTyO0/view?usp=drivesdk" },
      { name: "K12_02.mp3", url: "https://drive.google.com/file/d/1lx4laXQC6XdUBRxy49BoM4u5mhn7BrqQ/view?usp=drivesdk" },
      { name: "K12_03.mp3", url: "https://drive.google.com/file/d/1YNXRQmUxG7r2FN-0lgBrVGhOmWC8RZy7/view?usp=drivesdk" },
      { name: "K12_04.mp3", url: "https://drive.google.com/file/d/1kKrBaHncsAeNz_sD6hYbQDwBAhIvWdHo/view?usp=drivesdk" },
      
      { name: "V_K12_05.mp3",    url: "audio/genki1/ch12/K12_05.mp3" },
      { name: "V_K12_06.mp3",    url: "audio/genki1/ch12/K12_06.mp3" },

      { name: "R_K12_07.mp3", url: "https://drive.google.com/file/d/1oNrPtLbQFwVKGMRKm3wlK8kWcJgvY7yO/view?usp=drivesdk" },
      { name: "R_K12_08.mp3", url: "https://drive.google.com/file/d/1wgPl4LGXeKw6mpBrQ1-ATnkdSJ6CJHFx/view?usp=drivesdk" },
      { name: "R_K12_09.mp3", url: "https://drive.google.com/file/d/19YVhkIrQkatsEgNrOTdCc54QIF2ijla8/view?usp=drivesdk" },
      { name: "R_K12_10.mp3", url: "https://drive.google.com/file/d/1ge-afbjxsMHjwC_L4Oo0p8nq0c2FbHsP/view?usp=drivesdk" },
      { name: "R_K12_11.mp3", url: "https://drive.google.com/file/d/1FD2UUwhv_UVWGTFEKNN5cf60LNZl4qGG/view?usp=drivesdk" },
      { name: "R_K12_12.mp3", url: "https://drive.google.com/file/d/1ruTOLUep2LeUZZe9-qX7TrrDbPHT1MLl/view?usp=drivesdk" },
      { name: "R_K12_13.mp3", url: "https://drive.google.com/file/d/1COWhM2ehomtXn_geB_NrU26Tb5oddIYn/view?usp=drivesdk" },
      { name: "R_K12_14.mp3", url: "https://drive.google.com/file/d/1pqie16hvkK3aWr5R6CC7yn7HUV0EOZ2b/view?usp=drivesdk" },

      { name: "Y12.mp3", url: "https://drive.google.com/file/d/1ti8tcyioaOL23kLzCMfa1rl1hXqWggiI/view?usp=drivesdk" },
    ],
  },

  // ════════════════════════════════
  //  GENKI I — WORKBOOK
  // ════════════════════════════════
  genki1_workbook: {
    "00": [
      { name: "W00.mp3", url: "https://drive.google.com/file/d/1sKP-SaiXOfljatHHYtnHlGlFqBf4Sd-T/view?usp=drivesdk" },
    ],

    "01": [
      { name: "W01_A.mp3", url: "https://drive.google.com/file/d/1Hz5SPIC5Ec9o4aersZXkzX8aMnzf8d4W/view?usp=drivesdk" },
      { name: "W01_B.mp3", url: "https://drive.google.com/file/d/1N-kjTahJTI1HpwaVEU3Lp_2H6mW4ARsc/view?usp=drivesdk" },
      { name: "W01_C.mp3", url: "https://drive.google.com/file/d/1UHtDXCafQMQwr3GKBlZ1iYD9eDenEZ2c/view?usp=drivesdk" },
      { name: "W01_D.mp3", url: "https://drive.google.com/file/d/15trDTEegSc5wRXZTrHh4b2kTZtDZqD-x/view?usp=drivesdk" },

      { name: "WY_1.mp3", url: "https://drive.google.com/file/d/1JL65dwXySql728PLsNu1ASrnl18K7EMs/view?usp=drivesdk" },
      { name: "WY_2.mp3", url: "https://drive.google.com/file/d/1tq2j-3-nTtxMlJB4r8YLAWSlGcULWV5D/view?usp=drivesdk" },
      { name: "WY_3.mp3", url: "https://drive.google.com/file/d/1RoA3DZs62MLXLA2lBypVf6ezhmiTRbu5/view?usp=drivesdk" },
      { name: "WY_4.mp3", url: "https://drive.google.com/file/d/1gh5BLFV7IzxuKAoBanc10L00-AGz9B5J/view?usp=drivesdk" },
      { name: "WY_5.mp3", url: "https://drive.google.com/file/d/1k9Ok7dZBEp2tCD7FOFTo-ui6KIZM6yoe/view?usp=drivesdk" },
      { name: "WY_6.mp3", url: "https://drive.google.com/file/d/1whvxfQUT6T75TndYVmHYIAQRrzDbC3ud/view?usp=drivesdk" },
      { name: "WY_7.mp3", url: "https://drive.google.com/file/d/1ccdSZ68QIzRYeK2d2j2dUvNoCc6fFh5B/view?usp=drivesdk" },
      { name: "WY_8.mp3", url: "https://drive.google.com/file/d/1QqKCnj-ojjPop2B2-7--88o-cffwkoZO/view?usp=drivesdk" },
    ],

    "02": [
      { name: "W02_1.mp3", url: "https://drive.google.com/file/d/16RZ40I7k34BD-a2Ho6_CDr_HFmQlkJxz/view?usp=drivesdk" },
      { name: "W02_A.mp3", url: "https://drive.google.com/file/d/1GFYMP6HhETiuBF_cJTCkCFstqLCVtELx/view?usp=drivesdk" },
      { name: "W02_B.mp3", url: "https://drive.google.com/file/d/18TCiluyhlDIk2CVznzRGTEElLLM16BaW/view?usp=drivesdk" },
      { name: "W02_C.mp3", url: "https://drive.google.com/file/d/1glBvTmB_U0lcs0S2RjeMVtdwQcf_qoIk/view?usp=drivesdk" },
    ],

    "03": [
      { name: "W03_A.mp3", url: "https://drive.google.com/file/d/1dhXrHJvDqLaZpMEMD81V12o48V4ITS3g/view?usp=drivesdk" },
      { name: "W03_B.mp3", url: "https://drive.google.com/file/d/1el8E4RpzAOQiWwBfyJIPvzva3swcv_it/view?usp=drivesdk" },
      { name: "W03_C.mp3", url: "https://drive.google.com/file/d/1yRyLOriYIC7nc4xk-YZsS8RzeIqc5KOY/view?usp=drivesdk" },
      { name: "W03_D.mp3", url: "https://drive.google.com/file/d/17QZ1rD9xagPKh3zOOYuzEifo36OlpvpY/view?usp=drivesdk" },
    ],

    "04": [
      { name: "W04_A.mp3", url: "https://drive.google.com/file/d/19o92ab0QHyeZs-KJi9mX7gOAEk5zFTGM/view?usp=drivesdk" },
      { name: "W04_B.mp3", url: "https://drive.google.com/file/d/1d6ugYpZE2zshgMLi9ymzLmHxLQoAjJyE/view?usp=drivesdk" },
      { name: "W04_C.mp3", url: "https://drive.google.com/file/d/1_R67nIzuP7jyOZQhGpI5ERYp0pi2tZIt/view?usp=drivesdk" },
    ],

    "05": [
      { name: "W05_A.mp3", url: "https://drive.google.com/file/d/1zltq3dAfQynp3Y5sBWxywJZ_ytKG5Yv1/view?usp=drivesdk" },
      { name: "W05_B.mp3", url: "https://drive.google.com/file/d/1ME-cjghnlUfOTU8pu1gP_Cpt_7G8Fkay/view?usp=drivesdk" },
      { name: "W05_C.mp3", url: "https://drive.google.com/file/d/1zeJUKSwGwx1FS5gIFqKvUsjqFuW8GNUq/view?usp=drivesdk" },
    ],

    "06": [
      { name: "W06_A.mp3", url: "https://drive.google.com/file/d/1s6gTHt7xE-xyTmirwit7Pe2DbAFupSwT/view?usp=drivesdk" },
      { name: "W06_B.mp3", url: "https://drive.google.com/file/d/1k1_hKityNY67cO_tk2JuweE4oMfyVemV/view?usp=drivesdk" },
      { name: "W06_C.mp3", url: "https://drive.google.com/file/d/1VfMoYVfUgn4hFAhJYCx5rCs2Hv8wy4Uj/view?usp=drivesdk" },
    ],

    "07": [
      { name: "W07_A.mp3", url: "https://drive.google.com/file/d/1xAXn28_pMWTK9qGCE27EPe9grkcOFaej/view?usp=drivesdk" },
      { name: "W07_B.mp3", url: "https://drive.google.com/file/d/1ADk1vXaCwD_m_atkqHVbziR6Cr3vSFH1/view?usp=drivesdk" },
      { name: "W07_C.mp3", url: "https://drive.google.com/file/d/1iHvMtu5Zd50VbfI3gR71kfx_AeDHVBsW/view?usp=drivesdk" },
    ],

    "08": [
      { name: "W08_A.mp3", url: "https://drive.google.com/file/d/1YYGi1gfcsnFg_PXstO86NVcbGsvIbu-E/view?usp=drivesdk" },
      { name: "W08_B.mp3", url: "https://drive.google.com/file/d/1PCZMk-wCtB50yAHiacNk1B79cldIL6jd/view?usp=drivesdk" },
      { name: "W08_C.mp3", url: "https://drive.google.com/file/d/1LjlimpJtUzxCXOKple-duXvUhORQkNSD/view?usp=drivesdk" },
    ],

    "09": [
      { name: "W09_A.mp3", url: "https://drive.google.com/file/d/1kbj9v_qdAWMcFpVa4yToa2ZcoZI9WuTt/view?usp=drivesdk" },
      { name: "W09_B.mp3", url: "https://drive.google.com/file/d/1flCPZ8hIVauFDavpKpkFdx-xZ616hUfv/view?usp=drivesdk" },
      { name: "W09_C.mp3", url: "https://drive.google.com/file/d/19_E3L_bxW_p9LNkb0bdWWObH4OTtZWe-/view?usp=drivesdk" },
    ],

    "10": [
      { name: "W10_A.mp3", url: "https://drive.google.com/file/d/1wH77QY0BXjh9IGD5wjEIQCDOrQpkRvN9/view?usp=drivesdk" },
      { name: "W10_B.mp3", url: "https://drive.google.com/file/d/1w8tFrma371Ro_zYAS8GQGqMVQQ_6bWIX/view?usp=drivesdk" },
      { name: "W10_C.mp3", url: "https://drive.google.com/file/d/18lO_ltGhngAfNBf3n-luEwxldhcKRpF5/view?usp=drivesdk" },
    ],

    "11": [
      { name: "W11_A.mp3", url: "https://drive.google.com/file/d/1jjQ7q6atJIlYQhZ8LxjF180E8HoqFFIW/view?usp=drivesdk" },
      { name: "W11_B.mp3", url: "https://drive.google.com/file/d/1KGWsENVCDUuIgYzNyxvP_Pz3TYlXI7fR/view?usp=drivesdk" },
      { name: "W11_C.mp3", url: "https://drive.google.com/file/d/1aHF1Cb06uJiNME1qenO6P4uswfYsmdZI/view?usp=drivesdk" },
    ],

    "12": [
      { name: "W12_A.mp3", url: "https://drive.google.com/file/d/1cd5JmPtnHVGJ-8hc8QurKUV_ofiliaoZ/view?usp=drivesdk" },
      { name: "W12_B.mp3", url: "https://drive.google.com/file/d/1PvE14An1S4YdT1SBgkqdHpkf2UwhMU5q/view?usp=drivesdk" },
      { name: "W12_C.mp3", url: "https://drive.google.com/file/d/13ppL90y76yb8eQazVXOfgtsjfWL34bY_/view?usp=drivesdk" },
    ],
  },

  // ════════════════════════════════
  //  GENKI II — TEXTBOOK
  // ════════════════════════════════
  genki2_textbook: {
    "13": [
      { name: "K13_01.mp3", url: "https://drive.google.com/file/d/1G_dnr4FCtT23_PBL-mvUGzJ5jGrB_W0T/view?usp=drivesdk" },
      { name: "K13_02.mp3", url: "https://drive.google.com/file/d/17Nh3JKd2Ek0aYba6DaNw4-pS3LpLFJo9/view?usp=drivesdk" },
      { name: "K13_03.mp3", url: "https://drive.google.com/file/d/1PqdnJ3rZOr05RuXjux8esYHfmRylOfbD/view?usp=drivesdk" },
      { name: "K13_04.mp3", url: "https://drive.google.com/file/d/1gvcvBEpRm6rJ0R-YpLHolMC70RvnwutG/view?usp=drivesdk" },
      { name: "K13_05.mp3", url: "https://drive.google.com/file/d/1aXZlWhaTwmdXte3KyLfY3-m2tZyozxlu/view?usp=drivesdk" },
      { name: "K13_06.mp3", url: "https://drive.google.com/file/d/1JSeGF9-Hr6ramdVNAYyy0YsvMUStN_BQ/view?usp=drivesdk" },
      
      { name: "V_K13_07.mp3", url: "audio/genki2/ch13/V13.mp3" },
      { name: "V_K13_08.mp3", url: "audio/genki2/ch13/V13.mp3" },

      { name: "R_K13_09.mp3", url: "https://drive.google.com/file/d/1Y7wssPYBezUzgcxLuAJELewQe4cLvYeo/view?usp=drivesdk" },
      { name: "R_K13_10.mp3", url: "https://drive.google.com/file/d/1LTAgO1ndn4AE9In6-tmq873iw4CaTGBj/view?usp=drivesdk" },
      { name: "R_K13_11.mp3", url: "https://drive.google.com/file/d/1ongoVIyOSZk1PdUY8Jo4rgQy9YycXF73/view?usp=drivesdk" },
      { name: "R_K13_12.mp3", url: "https://drive.google.com/file/d/199fp3SP_mJrs_8Cs0gRIjLQiC7Y407Es/view?usp=drivesdk" },
      { name: "R_K13_13.mp3", url: "https://drive.google.com/file/d/1Uh0nzhaJnjDP967hGfr5AvRX9lDTbEqI/view?usp=drivesdk" },
      { name: "R_K13_14.mp3", url: "https://drive.google.com/file/d/1QOz6PegvQqgPhKGhw6s0scViiGneklrM/view?usp=drivesdk" },
      { name: "R_K13_15.mp3", url: "https://drive.google.com/file/d/1Qs3wBcWAzBoxs1JBS1J_U1toopBjc2O_/view?usp=drivesdk" },
      { name: "R_K13_16.mp3", url: "https://drive.google.com/file/d/1Wi6jQhLXGFmt-iLjW4Eywl6twwsZ-Mht/view?usp=drivesdk" },
      { name: "R_K13_17.mp3", url: "https://drive.google.com/file/d/1msCBY-e3SwXgYnW3Vd_-CfRQxEJONjmX/view?usp=drivesdk" },

      { name: "Y13_1.mp3", url: "https://drive.google.com/file/d/1CF-G-8bWgp_zzEu8O6ad43zwr3wcxi9e/view?usp=drivesdk" },
      { name: "Y13_2.mp3", url: "https://drive.google.com/file/d/1L4EMPkIpWOcd9wLjNLxGVeKuqHIWiJYC/view?usp=drivesdk" },
      
    ],

    "14": [
      { name: "K14_01.mp3", url: "https://drive.google.com/file/d/14jkXtnV6W2JKvUujz9BNqEYnTssTjUmO/view?usp=drivesdk" },
      { name: "K14_02.mp3", url: "https://drive.google.com/file/d/16hbN_HBPlNZ3nfwwePWVRjTWnMgHQkug/view?usp=drivesdk" },
      { name: "K14_03.mp3", url: "https://drive.google.com/file/d/1UCitwRIzlAT4CUpAs2C8MMzk5Lga2t_Q/view?usp=drivesdk" },
      { name: "K14_04.mp3", url: "https://drive.google.com/file/d/1isf-SLS7xjSeaFiW1py5yS_04GZ8AIbT/view?usp=drivesdk" },
      { name: "K14_05.mp3", url: "https://drive.google.com/file/d/1Y7u4H331tz0bVVduaBi-dScuryj-2jGO/view?usp=drivesdk" },
      { name: "K14_06.mp3", url: "https://drive.google.com/file/d/1iELRx11g3G08pYfLkrvIY6ylwxUaFTEs/view?usp=drivesdk" },
      
      { name: "V_K14_07.mp3", url: "audio/genki2/ch14/V14.mp3" },
      { name: "V_K14_08.mp3", url: "audio/genki2/ch14/V14.mp3" },
      
      { name: "R_K14_09.mp3", url: "https://drive.google.com/file/d/1VQPwxr1HRMwkaPsADYOi23ZjvYfM0op7/view?usp=drivesdk" },
      { name: "R_K14_10.mp3", url: "https://drive.google.com/file/d/1W0c9iTBVvVtaoD5lDPHIX_bpx0j6NXMH/view?usp=drivesdk" },
      { name: "R_K14_11.mp3", url: "https://drive.google.com/file/d/1KP40cZQZJ1DDrM1Wx4egkZckXNOLdFLk/view?usp=drivesdk" },
      { name: "R_K14_12.mp3", url: "https://drive.google.com/file/d/1aFaagnNCeeRm2dN2Q2mLZ5xlJvCc_9ZI/view?usp=drivesdk" },
      { name: "R_K14_13.mp3", url: "https://drive.google.com/file/d/1e73Yh4ddx8unD4nYMFm-GFtVZebIaTGk/view?usp=drivesdk" },
      { name: "R_K14_14.mp3", url: "https://drive.google.com/file/d/1yb7TaOHt2bGnNJYsWJ1he0vHwT9ZWuEj/view?usp=drivesdk" },
      { name: "R_K14_15.mp3", url: "https://drive.google.com/file/d/1dhpZf6q2FxiVvyvW4VxOqIt4dgxA6qds/view?usp=drivesdk" },
      { name: "R_K14_16.mp3", url: "https://drive.google.com/file/d/1kK3VxFEWUtw-0q4xFaRp5OUufeErtEsF/view?usp=drivesdk" },
      { name: "R_K14_17.mp3", url: "https://drive.google.com/file/d/17a6Hfgtx8L98GdUF_aqxPqN8uGHlaa9b/view?usp=drivesdk" },

      { name: "Y14_1.mp3", url: "https://drive.google.com/file/d/1xFhuAfkoxNL1QZOU8EM5GdpGvCpY9nIJ/view?usp=drivesdk" },
      { name: "Y14_2.mp3", url: "https://drive.google.com/file/d/18A7Mde85hb9MaZbAtG3ruVRLGfihUYIb/view?usp=drivesdk" },
      { name: "Y14_3.mp3", url: "https://drive.google.com/file/d/1ckS8SZPpgSy8TtRM-Xpwg_LmyjDwFycw/view?usp=drivesdk" },
      { name: "Y14_4.mp3", url: "https://drive.google.com/file/d/1biZ7QGfif2MQ5tZr77uASiRozm1WYWX7/view?usp=drivesdk" },
      
    ],

    "15": [
      { name: "K15_01.mp3", url: "https://drive.google.com/file/d/1QJnRmw5Fcd1m0svBw8mrYyjdWxvdWUSY/view?usp=drivesdk" },
      { name: "K15_02.mp3", url: "https://drive.google.com/file/d/1rNasE3O3zdzZJwgLtV4zgCkg63_NDsFm/view?usp=drivesdk" },
      { name: "K15_03.mp3", url: "https://drive.google.com/file/d/13UdMLwFYQt5VssyN8DPkEhzK6WsllHxx/view?usp=drivesdk" },
      { name: "K15_04.mp3", url: "https://drive.google.com/file/d/1RAIq9qCYgha6dy19_RpTOO0HfmKRJXHU/view?usp=drivesdk" },
      { name: "K15_05.mp3", url: "https://drive.google.com/file/d/17UDctKw5j5rde4kIgaQgnI39t0IMuElX/view?usp=drivesdk" },
      { name: "K15_06.mp3", url: "https://drive.google.com/file/d/19_51v_wHqwzCV0IXXAzgv18CblQ7NmOp/view?usp=drivesdk" },
      
      { name: "V_K15_07.mp3", url: "audio/genki2/ch15/V15.mp3" },
      { name: "V_K15_08.mp3", url: "audio/genki2/ch15/V15.mp3" },
      
      { name: "R_K15_09.mp3", url: "https://drive.google.com/file/d/15gcBQ-SAb_Xaoq830pKSS3wqENvxF26Y/view?usp=drivesdk" },
      { name: "R_K15_10.mp3", url: "https://drive.google.com/file/d/1WnJE_QmkCyQPrS0ZRH4WZvUalv7Ii_mv/view?usp=drivesdk" },
      { name: "R_K15_11.mp3", url: "https://drive.google.com/file/d/1nIZQ1PLxPQbG8Qcy_cuKr0p1K7_mWgom/view?usp=drivesdk" },
      { name: "R_K15_12.mp3", url: "https://drive.google.com/file/d/1uK7Ojo2He0powrAk6P2pXpGKv3zrEd3S/view?usp=drivesdk" },
      { name: "R_K15_13.mp3", url: "https://drive.google.com/file/d/1Rlkn1wOvt5YT2o-aUds6a5LA6mh2rSdx/view?usp=drivesdk" },
      { name: "R_K15_14.mp3", url: "https://drive.google.com/file/d/1SPWOOdiY0vYXXRlAgTYEDCMxfQc1tgOd/view?usp=drivesdk" },
      { name: "R_K15_15.mp3", url: "https://drive.google.com/file/d/1UlB7PKRtGqSb9OaLCch9XolLaYN-XjhN/view?usp=drivesdk" },
      { name: "R_K15_16.mp3", url: "https://drive.google.com/file/d/1RzbFtv1TnZN8gj3xar7vbeZKA5pG5KK0/view?usp=drivesdk" },

      { name: "Y15_1.mp3", url: "https://drive.google.com/file/d/1XQHtb8LfK3Fc2qE_FkX4_eRfeNZWZljM/view?usp=drivesdk" },
      { name: "Y15_2.mp3", url: "https://drive.google.com/file/d/1OH0Z1Rpkj2bunLqnI-seUDo0cACbZ4-W/view?usp=drivesdk" },
      { name: "Y15_3.mp3", url: "https://drive.google.com/file/d/1D53BjM94NYcvrQ19WS1KNkEmf0TnTu6w/view?usp=drivesdk" },
      { name: "Y15_4.mp3", url: "https://drive.google.com/file/d/13o3JZus2DMALoARUy3knZ0xpm947OVHh/view?usp=drivesdk" },
      
    ],

    "16": [
      { name: "K16_01.mp3", url: "https://drive.google.com/file/d/13LVqr3WtA2SLvRTQfKeGrXwVTbyEu9TY/view?usp=drivesdk" },
      { name: "K16_02.mp3", url: "https://drive.google.com/file/d/1crRvrxl-h1eFwZeS2IPZmzxs3OFLAMmf/view?usp=drivesdk" },
      { name: "K16_03.mp3", url: "https://drive.google.com/file/d/1lqZSPZN0REfHq6iy-cg_8sqQbi56VcJN/view?usp=drivesdk" },
      { name: "K16_04.mp3", url: "https://drive.google.com/file/d/1PgZDTSjt1qAZGtT-SsKt33dUj96zjivL/view?usp=drivesdk" },
      { name: "K16_05.mp3", url: "https://drive.google.com/file/d/1wuDjqWaHpFdLhVhG6XdnQHICt3cuvTCS/view?usp=drivesdk" },
      { name: "K16_06.mp3", url: "https://drive.google.com/file/d/1MSlr8ZIxJ1VS063z_DqUecx-61K-USTr/view?usp=drivesdk" },

      { name: "V_K16_07.mp3", url: "audio/genki2/ch16/V16.mp3" },
      { name: "V_K16_08.mp3", url: "audio/genki2/ch16/V16.mp3" },
      
      { name: "R_K16_09.mp3", url: "https://drive.google.com/file/d/148IJDPdruwUeh2VyE3amE7OuCaOL8Q5O/view?usp=drivesdk" },
      { name: "R_K16_10.mp3", url: "https://drive.google.com/file/d/1jRU9d4948aiclnzNJVUcWZ1sGT7mtHDh/view?usp=drivesdk" },
      { name: "R_K16_11.mp3", url: "https://drive.google.com/file/d/1D1AjCH_0LBkukwI0vLI335XclhxRMi9_/view?usp=drivesdk" },
      { name: "R_K16_12.mp3", url: "https://drive.google.com/file/d/1-xeDt9G4jU6DIUM_MUSkApucqh4K10Y8/view?usp=drivesdk" },
      { name: "R_K16_13.mp3", url: "https://drive.google.com/file/d/17kaiS3Bfl8qetT9YZdzh7Flf60WiQ5Eq/view?usp=drivesdk" },
      { name: "R_K16_14.mp3", url: "https://drive.google.com/file/d/1PHhElCpjUVViS2vaUBdimHD3ZThcQjpD/view?usp=drivesdk" },
      { name: "R_K16_15.mp3", url: "https://drive.google.com/file/d/1aktYycB0RpsPhYpGJfCM27CRzYWua4Tf/view?usp=drivesdk" },
      { name: "R_K16_16.mp3", url: "https://drive.google.com/file/d/1NRofLKa36lNvzvzYsRbee2AK5GewSXTe/view?usp=drivesdk" },
      { name: "R_K16_17.mp3", url: "https://drive.google.com/file/d/1qlOQiYWGXCeV1tB0hvaXKYn93z7Kt-cB/view?usp=drivesdk" },

      { name: "Y16.mp3", url: "https://drive.google.com/file/d/1xjbYQ-34SB1r6PkziEQtYTBl85Vu1Zjc/view?usp=drivesdk" },
      
    ],

    "17": [
       { name: "K17_01.mp3", url: "https://drive.google.com/file/d/1uj7rl6DFAigVf785RePF05fpVl2kOEz8/view?usp=drivesdk" },
      { name: "K17_02.mp3", url: "https://drive.google.com/file/d/1-p05aH9S3_J3JqunyXKF-ux2bGBB3NDo/view?usp=drivesdk" },
      { name: "K17_03.mp3", url: "https://drive.google.com/file/d/1GDiiiHzjuAI4-3fIMFzq1U7TZqukaehm/view?usp=drivesdk" },
      { name: "K17_04.mp3", url: "https://drive.google.com/file/d/17gcImXBuNEbR3CF93nO2LndvDojIaJel/view?usp=drivesdk" },
      
      { name: "V_K17_05.mp3", url: "audio/genki2/ch17/V17.mp3" },
      { name: "V_K17_06.mp3", url: "audio/genki2/ch17/V17.mp3" },
      
      { name: "R_K17_07.mp3", url: "https://drive.google.com/file/d/1KekcLl5EH2ko5myvg48bwLhiMt3qF_cs/view?usp=drivesdk" },
      { name: "R_K17_08.mp3", url: "https://drive.google.com/file/d/12FqkVpH7LwogdkmJP2j7UcObgg9Yae68/view?usp=drivesdk" },
      { name: "R_K17_09.mp3", url: "https://drive.google.com/file/d/1VdeC1yckNFKbPXDdijxjJEx76ceCcE5a/view?usp=drivesdk" },
      { name: "R_K17_10.mp3", url: "https://drive.google.com/file/d/1KJ0mxlaXWIVXpjIYav6GT1r5kjdBfAsi/view?usp=drivesdk" },
      { name: "R_K17_11.mp3", url: "https://drive.google.com/file/d/1EtpwFQ3_SoBshX_4i1COrQtqWB1gqeYn/view?usp=drivesdk" },
      { name: "R_K17_12.mp3", url: "https://drive.google.com/file/d/1HH9DtOlNqP8OF7kBb8BnxfvZPu4NI6vJ/view?usp=drivesdk" },
      { name: "R_K17_13.mp3", url: "https://drive.google.com/file/d/14-ZK-N5JecJGY71ibnd3QRSvxAOrNGS1/view?usp=drivesdk" },
      { name: "R_K17_14.mp3", url: "https://drive.google.com/file/d/15qCE2c_7aCuSwBWm3TNn9Qe3E2zRjIxf/view?usp=drivesdk" },

      { name: "Y17.mp3", url: "https://drive.google.com/file/d/1pjpni36cUH1aPQrmkWHSB5Q3cceUZ41f/view?usp=drivesdk" },
      
    ],

    "18": [
      { name: "K18_01.mp3", url: "https://drive.google.com/file/d/1VFbGiGAaF0bZ8Ip1VPLpz3V_12M1CZ1s/view?usp=drivesdk" },
      { name: "K18_02.mp3", url: "https://drive.google.com/file/d/1cmMxSd9By_zCAh7mkdRPD_HnHmYc-gKa/view?usp=drivesdk" },
      { name: "K18_03.mp3", url: "https://drive.google.com/file/d/15iQbpBjzBfA4dAYFL3DKSKRCddz0amZ7/view?usp=drivesdk" },
      { name: "K18_04.mp3", url: "https://drive.google.com/file/d/1OegDU5Y2JS9zB9iOnDprznzf0xooRN14/view?usp=drivesdk" },
      { name: "K18_05.mp3", url: "https://drive.google.com/file/d/1rOjyLvWiRpJzSArKFhudPBy5asypgjD4/view?usp=drivesdk" },
      { name: "K18_06.mp3", url: "https://drive.google.com/file/d/1Y0Rcgc2g6VTxLbSRaIrTKVyzTQsc6Y7Q/view?usp=drivesdk" },
      
      { name: "V_K18_07.mp3", url: "audio/genki2/ch18/V18.mp3" },
      { name: "V_K18_08.mp3", url: "audio/genki2/ch18/V18.mp3" },

      { name: "R_K18_09.mp3", url: "https://drive.google.com/file/d/10L8-7vuh-JIEtGG71PpLssNX0_KTNq5r/view?usp=drivesdk" },
      { name: "R_K18_10.mp3", url: "https://drive.google.com/file/d/1v0TJdpEz8PlyIrca7Hh2dmco0D7F_aTV/view?usp=drivesdk" },
      { name: "R_K18_11.mp3", url: "https://drive.google.com/file/d/1d5amFturmD37mK-nW8URQDT1NYTJopfy/view?usp=drivesdk" },
      { name: "R_K18_12.mp3", url: "https://drive.google.com/file/d/1h26Xc3TYtk_hCoNIxzNN_EQLCFMJelnF/view?usp=drivesdk" },
      { name: "R_K18_13.mp3", url: "https://drive.google.com/file/d/1Iq_H3GbDEcuymSLehT87wZ5lTQ8-Xf30/view?usp=drivesdk" },
      { name: "R_K18_14.mp3", url: "https://drive.google.com/file/d/171y9U0h3rcccIAPnoH0oJ6LYzvAPTL1j/view?usp=drivesdk" },
      { name: "R_K18_15.mp3", url: "https://drive.google.com/file/d/1tXr5h7j8dDGwWTBd_KaVJQ12JuWzOg97/view?usp=drivesdk" },
      { name: "R_K18_16.mp3", url: "https://drive.google.com/file/d/1y5xB4b7kpQGCa4iYpNRt91Eu7PuoUyII/view?usp=drivesdk" },

      { name: "Y18.mp3", url: "https://drive.google.com/file/d/1wSB45vruvSIC9DOG0NuH_LW_6bzoVBzX/view?usp=drivesdk" },
      
    ],

    "19": [
      { name: "K19_01.mp3", url: "https://drive.google.com/file/d/1y20SpZMcyESPAbAWSTalrfSFHv9FE3fp/view?usp=drivesdk" },
      { name: "K19_02.mp3", url: "https://drive.google.com/file/d/1pTEhKrQQKzBxuo4C16Le_FHqvTlXJ7FA/view?usp=drivesdk" },
      { name: "K19_03.mp3", url: "https://drive.google.com/file/d/1Nq27DguhCHggZ_6rCPmYwKlhiEqaUP06/view?usp=drivesdk" },
      { name: "K19_04.mp3", url: "https://drive.google.com/file/d/1RaOnQK2mD254OA2bqc8OCWfg_XcQX5H2/view?usp=drivesdk" },
      { name: "K19_05.mp3", url: "https://drive.google.com/file/d/1NXbE-AOQoECKHVjoD9XuzZcQxoa0FRc_/view?usp=drivesdk" },
      { name: "K19_06.mp3", url: "https://drive.google.com/file/d/19X7X7vAMwg4YHAaTzc0qJITCwK_UChkl/view?usp=drivesdk" },
      
      { name: "V_K19_07.mp3", url: "audio/genki2/ch19/V19.mp3" },
      { name: "V_K19_08.mp3", url: "audio/genki2/ch19/V19.mp3" },
      
      { name: "R_K19_09.mp3", url: "https://drive.google.com/file/d/1Q0Z4pPNo5FpCmlhcsMVP1-RHviLRCl_v/view?usp=drivesdk" },
      { name: "R_K19_10.mp3", url: "https://drive.google.com/file/d/1CMdZ5-oD7L1Ywz-DnFvlPDKlXzv-KzuS/view?usp=drivesdk" },
      { name: "R_K19_11.mp3", url: "https://drive.google.com/file/d/1Tgx1RIoGReRryDF5m9nNDZKVdTUyNILs/view?usp=drivesdk" },
      { name: "R_K19_12.mp3", url: "https://drive.google.com/file/d/1LYKSX7dcQcGZOnYlMQ6u4NvnX3XMLikm/view?usp=drivesdk" },
      { name: "R_K19_13.mp3", url: "https://drive.google.com/file/d/1YdErQI41VXcs-CZJC13heqAbqnGWLFSF/view?usp=drivesdk" },
      { name: "R_K19_14.mp3", url: "https://drive.google.com/file/d/1C1oJRba9Lg6BVgRkuihJxX7QYAefzij1/view?usp=drivesdk" },
      { name: "R_K19_15.mp3", url: "https://drive.google.com/file/d/1tPPNUSTIgPR5xC_857LPZfQ3wmDyyjlL/view?usp=drivesdk" },
      { name: "R_K19_16.mp3", url: "https://drive.google.com/file/d/1ZLlJVN04yaiQ8dBGPalkv9vOP3G1XoPR/view?usp=drivesdk" },
      { name: "R_K19_17.mp3", url: "https://drive.google.com/file/d/1kUYn_r76mbJCrOFzq2HyCEsNJWd61BvG/view?usp=drivesdk" },

      { name: "Y19_1.mp3", url: "https://drive.google.com/file/d/16br_iISeYuDjUvzNaADSpat78xM0bmtP/view?usp=drivesdk" },
      { name: "Y19_2.mp3", url: "https://drive.google.com/file/d/181UqKn_AdugSTJw2QHRFLfv8ppDwFz7f/view?usp=drivesdk" },
      
    ],

    "20": [
      { name: "K20_01.mp3", url: "https://drive.google.com/file/d/1gN1mtWPK_6-A5MLwnbqRxPnZwbQgjbMy/view?usp=drivesdk" },
      { name: "K20_02.mp3", url: "https://drive.google.com/file/d/1X1uQKOZ9tq6chvmDDevhN_9yu7ZVBFaq/view?usp=drivesdk" },
      { name: "K20_03.mp3", url: "https://drive.google.com/file/d/1TWIovu9gF4aVPAP5WxyMR0BeYVMLzbtM/view?usp=drivesdk" },
      { name: "K20_04.mp3", url: "https://drive.google.com/file/d/1HcAdGCCajQWqUaM9piTtngGtaUPFkWqE/view?usp=drivesdk" },
      
      { name: "V_K20_05.mp3", url: "audio/genki2/ch20/V20.mp3"  },
      { name: "V_K20_06.mp3", url: "audio/genki2/ch20/V20.mp3"  },

      { name: "R_K20_07.mp3", url: "https://drive.google.com/file/d/1fTsHmIWN0ZlMWVNdRxuk8vxYr70bTCyD/view?usp=drivesdk" },
      { name: "R_K20_08.mp3", url: "https://drive.google.com/file/d/1PXAF7Ec6aAeCSK18qmHwgG6oCezKuvIi/view?usp=drivesdk" },
      { name: "R_K20_09.mp3", url: "https://drive.google.com/file/d/1mWfppECCUB1ZDQyU6RM5A5Bdn7oUccKT/view?usp=drivesdk" },
      { name: "R_K20_10.mp3", url: "https://drive.google.com/file/d/1QPi37MYiRGGTzWVFBGtvcCcws1EqYLg-/view?usp=drivesdk" },
      { name: "R_K20_11.mp3", url: "https://drive.google.com/file/d/135DnlpW0Q0rQuaxd6z777QqOYfOYb9A5/view?usp=drivesdk" },
      { name: "R_K20_12.mp3", url: "https://drive.google.com/file/d/1HEcowrflS1bmFYRgcrRPU2ZOVGQXsarm/view?usp=drivesdk" },
      { name: "R_K20_13.mp3", url: "https://drive.google.com/file/d/19uThM3DucvUHrDbEkOtKjAaFz3ASlbVd/view?usp=drivesdk" },
      { name: "R_K20_14.mp3", url: "https://drive.google.com/file/d/1MgnvWTTn1VgXdzxjbOVeMa4BYtdVEBdA/view?usp=drivesdk" },
      { name: "R_K20_15.mp3", url: "https://drive.google.com/file/d/1hKjI2356jBlBaDCKBO7325pJWHEnOuf2/view?usp=drivesdk" },
      { name: "R_K20_16.mp3", url: "https://drive.google.com/file/d/1dEh-GdqFNMpPtwBbGPPbPxYeocXryQdZ/view?usp=drivesdk" },
      { name: "R_K20_17.mp3", url: "https://drive.google.com/file/d/1YSCx8_IWxqTrOwOG6LuCpA-8NKRDFst9/view?usp=drivesdk" },

      { name: "Y20.mp3", url: "https://drive.google.com/file/d/1cabU7LMnE3MIFQoU_OvfIvK-ozPnXt6N/view?usp=drivesdk" },
      
    ],

    "21": [
      { name: "K21_01.mp3", url: "https://drive.google.com/file/d/1slJBSan3tKj9VEPo5r1ywN-fHaOV5tHt/view?usp=drivesdk" },
      { name: "K21_02.mp3", url: "https://drive.google.com/file/d/15keglJKI9CMOJEYIFUnxCP2i6Jsxj8Tr/view?usp=drivesdk" },
      { name: "K21_03.mp3", url: "https://drive.google.com/file/d/1JwKlLxmFUKnV_-CB1kNvqVTgpYiSeZS_/view?usp=drivesdk" },
      { name: "K21_04.mp3", url: "https://drive.google.com/file/d/1CQnBzY3Fweo-ossEap7wm_lYjil_7jY9/view?usp=drivesdk" },
      { name: "K21_05.mp3", url: "https://drive.google.com/file/d/1wR7ipKg385Ehg8LVbu9cUcwhf8X0nKz3/view?usp=drivesdk" },
      { name: "K21_06.mp3", url: "https://drive.google.com/file/d/1RqpHWY_gDPSKdU_sSOrtqMI8ya4chE2_/view?usp=drivesdk" },
      
      { name: "V_K21_07.mp3", url: "audio/genki2/ch21/V21.mp3" },
      { name: "V_K21_08.mp3", url: "audio/genki2/ch21/V21.mp3" },

      { name: "R_K21_09.mp3", url: "https://drive.google.com/file/d/1pRqAyp4nRAJxyAURP6bIjkB45qo1Iulm/view?usp=drivesdk" },
      { name: "R_K21_10.mp3", url: "https://drive.google.com/file/d/1o5YGgw8aAXsx_iIpFj7rinCpBGClGF88/view?usp=drivesdk" },
      { name: "R_K21_11.mp3", url: "https://drive.google.com/file/d/1LqDz_2OaKbsB0Kt-rGLGSqpMav7omzmw/view?usp=drivesdk" },
      { name: "R_K21_12.mp3", url: "https://drive.google.com/file/d/19e5QAmyhX4JfvnN-VlIXyUOLqVi5fNxT/view?usp=drivesdk" },
      { name: "R_K21_13.mp3", url: "https://drive.google.com/file/d/1QXOx-qp3hYufdonkyLp_1yKLvufG9oqO/view?usp=drivesdk" },
      { name: "R_K21_14.mp3", url: "https://drive.google.com/file/d/1wj2vN0V7VMa872-RzNl82qVik-4PQVcJ/view?usp=drivesdk" },

      { name: "Y21.mp3", url: "https://drive.google.com/file/d/1jqwNDwgbgfMJ9HsiI9yZ9oAXYR3BRcfv/view?usp=drivesdk" },
     
    ],

    "22": [
      { name: "K22_01.mp3", url: "https://drive.google.com/file/d/1UHCWPE0rwCMq-G7GaoRRpacHYq4pqTB5/view?usp=drivesdk" },
      { name: "K22_02.mp3", url: "https://drive.google.com/file/d/1IcS15MTdmzkKonTSJKyfNF62tT5fHWV2/view?usp=drivesdk" },
      { name: "K22_03.mp3", url: "https://drive.google.com/file/d/15g1JbxsrpKEEPGZby9C2uek2jWAX-0sX/view?usp=drivesdk" },
      { name: "K22_04.mp3", url: "https://drive.google.com/file/d/1XBRrJxVn8jr5cfMTXorIet2J154InW4A/view?usp=drivesdk" },
      { name: "K22_05.mp3", url: "https://drive.google.com/file/d/1oR1OTeMzg_YMV0BDEnwrDSoVPHMRFFE-/view?usp=drivesdk" },
      { name: "K22_06.mp3", url: "https://drive.google.com/file/d/1JwYtORq1Qwk1cbtDA8HkZxByF4cOhkcK/view?usp=drivesdk" },
      
      { name: "V_K22_07.mp3", url: "audio/genki2/ch22/V22.mp3" },
      { name: "V_K22_08.mp3", url: "audio/genki2/ch22/V22.mp3" },

      { name: "R_K22_09.mp3", url: "https://drive.google.com/file/d/1jwFYpe6I_9w-O2NH40JwmWUEg0ytc3in/view?usp=drivesdk" },
      { name: "R_K22_10.mp3", url: "https://drive.google.com/file/d/1E-6PN_X4VHLczM71grECe_fNkt-O0T5m/view?usp=drivesdk" },
      { name: "R_K22_11.mp3", url: "https://drive.google.com/file/d/1XA120XOc2-TdrZly5nOa3iZcbVZ9HKCZ/view?usp=drivesdk" },
      { name: "R_K22_12.mp3", url: "https://drive.google.com/file/d/15c8u0zpjkBcrCuQx5op_1oT2t7jF3IHA/view?usp=drivesdk" },
      { name: "R_K22_13.mp3", url: "https://drive.google.com/file/d/145Zm_xoIw-gYcq5tLsKCov_wIYepUV0r/view?usp=drivesdk" },
      { name: "R_K22_14.mp3", url: "https://drive.google.com/file/d/13pdkcDAOtJPHSrRbWfRcJk240JPRA0AV/view?usp=drivesdk" },
      { name: "R_K22_15.mp3", url: "https://drive.google.com/file/d/1CLRKmtyA6ShHxIpJwD61McGWi24xoZJx/view?usp=drivesdk" },
      { name: "R_K22_16.mp3", url: "https://drive.google.com/file/d/1zUKYkkn4HNx7jU2SQ8dz2Yn2xmd7Dhc0/view?usp=drivesdk" },
      { name: "R_K22_17.mp3", url: "https://drive.google.com/file/d/1azko1ZjzGg0GJo-XVmf2NmhGWpdPgHKi/view?usp=drivesdk" },
      { name: "R_K22_18.mp3", url: "https://drive.google.com/file/d/1SfqKXKzcyHLE0dB4EUpUOMnLF9381n-D/view?usp=drivesdk" },

       { name: "Y22.mp3", url: "https://drive.google.com/file/d/1yIXDbqJQzLqDT-QUDMQVHa5tW-5MjDSh/view?usp=drivesdk" },
      
    ],
    "23": [
      { name: "K23_01.mp3", url: "https://drive.google.com/file/d/1qRdPGXbBHzSDeYOJJlutLD7smZsLOmOo/view?usp=drivesdk" },
      { name: "K23_02.mp3", url: "https://drive.google.com/file/d/179f9Bs3vzITbHcBf1RZBnw5Bm-avPAQo/view?usp=drivesdk" },
      { name: "K23_03.mp3", url: "https://drive.google.com/file/d/1M6ARh0A8xD8haka1QnoTJbDAj9TM8mY0/view?usp=drivesdk" },
      { name: "K23_04.mp3", url: "https://drive.google.com/file/d/18M4e8l1Ne3U5u_qDGI2RRxBpqnvU1e9C/view?usp=drivesdk" },
      { name: "K23_05.mp3", url: "https://drive.google.com/file/d/1Ce5-Nm6_94s1Rah9QMfjqCqvCVue3mEG/view?usp=drivesdk" },
      { name: "K23_06.mp3", url: "https://drive.google.com/file/d/1v3qwXUA9r6eBSOkaBIk1xm9CwPrjArcY/view?usp=drivesdk" },
      
      { name: "V_K23_07.mp3", url: "audio/genki2/ch23/V23.mp3" },
      { name: "V_K23_08.mp3", url: "audio/genki2/ch23/V23.mp3" },

      { name: "R_K23_09.mp3", url: "https://drive.google.com/file/d/1B9JO1fVCE_IDJqJj0mFmHCB1yk-51al3/view?usp=drivesdk" },
      { name: "R_K23_10.mp3", url: "https://drive.google.com/file/d/1j5j22d_ehOfDIsLmfX1Zi0EZ7AyJs1GD/view?usp=drivesdk" },
      { name: "R_K23_11.mp3", url: "https://drive.google.com/file/d/1KhpPwyC1Qqeh4Vi6FNH9SQzUbdrnd_WV/view?usp=drivesdk" },
      { name: "R_K23_12.mp3", url: "https://drive.google.com/file/d/1d7iva9wM8doXtR-s2tyVdJk0WU-4xN60/view?usp=drivesdk" },
      { name: "R_K23_13.mp3", url: "https://drive.google.com/file/d/1jC1Gov-N3MR59xz5VlahGhmt3ImPcYSw/view?usp=drivesdk" },
      { name: "R_K23_14.mp3", url: "https://drive.google.com/file/d/1_-4z48W8wO24OQH-sOiRrmAr3dlVVZuT/view?usp=drivesdk" },
      { name: "R_K23_15.mp3", url: "https://drive.google.com/file/d/1Dx1x-MWlvWIbO66Hnmz9lgm3bY3J4lPE/view?usp=drivesdk" },
      { name: "R_K23_16.mp3", url: "https://drive.google.com/file/d/1irHBUAgtzERVbbtclFLnbOHKjNNdHfxS/view?usp=drivesdk" },
      { name: "R_K23_17.mp3", url: "https://drive.google.com/file/d/1QEgmfwhu_PLCbCZLmVvmeaNqdh9h02E1/view?usp=drivesdk" },

      { name: "Y23.mp3", url: "https://drive.google.com/file/d/1Rl2gs_P9CEDxlk3yHX0MifAeHBhc4t1Q/view?usp=drivesdk" },
    ],
    
  },

  // ════════════════════════════════
  //  GENKI II — WORKBOOK
  // ════════════════════════════════
  genki2_workbook: {
    "13": [
      { name: "W13_A.mp3", url: "https://drive.google.com/file/d/1-5pqRhWmDIFURTbFfJ2LneQFLsn0m94A/view?usp=drivesdk" },
      { name: "W13_B.mp3", url: "https://drive.google.com/file/d/1Fo0phXXMopDjRLKYhRujQuPMertkJavY/view?usp=drivesdk" },
      { name: "W13_C.mp3", url: "https://drive.google.com/file/d/1N2s4YlcTFNMUu_Y1fX0_N4XX0HXAydHI/view?usp=drivesdk" },
      ],

    "14": [
      { name: "W14_A.mp3", url: "https://drive.google.com/file/d/1uldBb4wb1jOHmsm10HzWMHQpMSYU0eUG/view?usp=drivesdk" },
      { name: "W14_B.mp3", url: "https://drive.google.com/file/d/1vowXvi8xYMmGaq_XJVbYZE0dUc8uQC-f/view?usp=drivesdk" },
      { name: "W14_C.mp3", url: "https://drive.google.com/file/d/17qJy09hOcSWTBg9RLg0MWBC1_tlOWOZz/view?usp=drivesdk" },
      ],

    "15": [
      { name: "W15_A.mp3", url: "https://drive.google.com/file/d/1n3v7mbGgptf_I-ggXMAmN6NIfr5_Avjx/view?usp=drivesdk" },
      { name: "W15_B.mp3", url: "https://drive.google.com/file/d/1RxGHw8PLVComKI-A5jm5SHv6Dbb-lJVY/view?usp=drivesdk" },
      { name: "W15_C.mp3", url: "https://drive.google.com/file/d/1cyhZSvlB_yJsWHeywe7bLunoda3Qyg2n/view?usp=drivesdk" },
      ],

    "16": [
      { name: "W16_A.mp3", url: "https://drive.google.com/file/d/12wBKbsz3tkaJPt2dLYEK9E8Fg_2p_xzb/view?usp=drivesdk" },
      { name: "W16_B.mp3", url: "https://drive.google.com/file/d/1Y4z9OFLfHtp4SYZsAxnCo0CLcS1f8nJu/view?usp=drivesdk" },
      { name: "W16_C.mp3", url: "https://drive.google.com/file/d/1JFC_8WW-7JkLEEyZIFr-EBDjDs4Olulj/view?usp=drivesdk" },
      ],

    "17": [
      { name: "W17_A.mp3", url: "https://drive.google.com/file/d/1xWePRYSO1c_nC_b03Vigh7cOT-IjMyb3/view?usp=drivesdk" },
      { name: "W17_B.mp3", url: "https://drive.google.com/file/d/17MU61sU29SwkuthoJedqOMI0eJs7Ayit/view?usp=drivesdk" },
      { name: "W17_C.mp3", url: "https://drive.google.com/file/d/13OABHoFPnr94mvJhINZZgs9kDhCMAKB3/view?usp=drivesdk" },
      ],

    "18": [
      { name: "W18_A.mp3", url: "https://drive.google.com/file/d/1_ptykWK9Kv_mCJ94Phrioqrr4z6f8BIS/view?usp=drivesdk" },
      { name: "W18_B.mp3", url: "https://drive.google.com/file/d/1KiX7oHZiUAMfW9jEKkdh9w5V3zVVs021/view?usp=drivesdk" },
      { name: "W18_C.mp3", url: "https://drive.google.com/file/d/1nYOaJ3zgaeREyPo6ao3cfgFfwk8wFrxG/view?usp=drivesdk" },
      ],

    "19": [
      { name: "W19_A.mp3", url: "https://drive.google.com/file/d/1y-10Sx3sRd7qSCmd_lHEb-12MP3V1jx1/view?usp=drivesdk" },
      { name: "W19_B.mp3", url: "https://drive.google.com/file/d/1ik5Q0k6GGyBRG0OQgrLojGCmGByeSwGM/view?usp=drivesdk" },
      { name: "W19_C.mp3", url: "https://drive.google.com/file/d/1QkHhKNLE5hnRuEx-yd-y64G560ClXT_8/view?usp=drivesdk" },
      ],

    "20": [
      { name: "W20_A.mp3", url: "https://drive.google.com/file/d/1wZa-BDd5jEF-3eBW5U2cILBT8DH82g5O/view?usp=drivesdk" },
      { name: "W20_B.mp3", url: "https://drive.google.com/file/d/12m7NPPg1aIlcTfh9JJC6MrPSET2grlr4/view?usp=drivesdk" },
      { name: "W20_C.mp3", url: "https://drive.google.com/file/d/1R_mvtu3sBIZZQZtczo4Dp9Z1J3oBlU6W/view?usp=drivesdk" },
      ],

    "21": [
      { name: "W21_A.mp3", url: "https://drive.google.com/file/d/1x3Bgu9mlptzB_6ALQMRtjn99-yb_Wy2-/view?usp=drivesdk" },
      { name: "W21_B.mp3", url: "https://drive.google.com/file/d/1PYkexO45OnXxnp4iGTDKSfEPtlK3sEmX/view?usp=drivesdk" },
      { name: "W21_C.mp3", url: "https://drive.google.com/file/d/1mOja3JMdsFqPvltCMmVK-Wd4tR8lKaoc/view?usp=drivesdk" },
      ],

    "22": [
      { name: "W22_A.mp3", url: "https://drive.google.com/file/d/1B6CaUSD9m3cXS1sINv-9hds1zPefDEGm/view?usp=drivesdk" },
      { name: "W22_B.mp3", url: "https://drive.google.com/file/d/1Dn-EVbkvJvdKJQJqPgb_gK9ofNn-5edD/view?usp=drivesdk" },
      { name: "W22_C.mp3", url: "https://drive.google.com/file/d/1b7wd4ivrgqqTfAzaZ-YdKHeJfNAt7Kgr/view?usp=drivesdk" },
      ],
      
    "23": [
      { name: "W23_A.mp3", url: "https://drive.google.com/file/d/1xeLasZzaqAc6HjV32tNN1Jmcck4OXUkz/view?usp=drivesdk" },
      { name: "W23_B.mp3", url: "https://drive.google.com/file/d/1RLsNMK3_J9-rELfzxvixgb9g7Em_9alu/view?usp=drivesdk" },
      { name: "W23_C.mp3", url: "https://drive.google.com/file/d/1NeCrPUhqVONlhKbkz5MZ2yUOXHmd85jq/view?usp=drivesdk" },
    ],
    
  },
};
