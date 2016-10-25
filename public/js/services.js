'use strict';

angular.module('myApp.services', [])
  .service('NewGameService', function() {
    this.items = [
      {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BspTawrCEAAwQnP.jpg:large',
        src: 'pic.twitter.com/6bdYFIyc3e'
      }, {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BspTkipCIAE4a0n.jpg:large',
        src: 'pic.twitter.com/7hvwgRmZ2r'
      }, {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BspWSkvCAAAMi43.jpg:large',
        src: 'pic.twitter.com/VMJbHYLznB'
      }, {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BspWVoqCEAADtZ4.jpg:large',
        src: 'pic.twitter.com/Y3ht2Ud94J'
      }, {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BspWaPYCAAAI6Ui.jpg:large',
        src: 'pic.twitter.com/7s5Ke5IQVs'
      }, {
        word: 'がんばる',
        image: 'https://pbs.twimg.com/media/BswuTdaCQAAQCkg.jpg:large',
        src: 'pic.twitter.com/mrkPJC3DYc'
      }, {
        word: 'あきらめる',
        image: 'https://pbs.twimg.com/media/BspWc7LCAAAPzhS.jpg:large',
        src: 'pic.twitter.com/DE1dKyLsav'
      }, {
        word: 'あきらめる',
        image: 'https://pbs.twimg.com/media/BspWfqoCYAE836J.jpg:large',
        src: 'pic.twitter.com/lkDaoEEC7H'
      }, {
        word: 'あきらめる',
        image: 'https://pbs.twimg.com/media/BtcSLNRCMAAFGoH.jpg:large',
        src: 'pic.twitter.com/jEHjdl6k3N'
      }, {
        word: 'あきらめる',
        image: 'https://pbs.twimg.com/media/BtcSIHmCUAA8Prp.jpg:large',
        src: 'pic.twitter.com/IPsYt9K1t2'
      }, {
        word: 'かえる',
        image: 'https://pbs.twimg.com/media/BswuLr2CMAA1SpE.jpg:large',
        src: 'pic.twitter.com/ltC7iuI7rd'
      }, {
        word: 'きたく',
        image: 'https://pbs.twimg.com/media/BtcSRdRCMAArUCS.jpg:large',
        src: 'pic.twitter.com/jjXJFYBZjy'
      }, {
        word: 'ごはんにする',
        image: 'https://pbs.twimg.com/media/BspWlZFCMAA4fmV.jpg:large',
        src: 'pic.twitter.com/rWLIjU08mU'
      }, {
        word: 'ごはんにする',
        image: 'https://pbs.twimg.com/media/BswuMrPCEAEECXg.jpg:large',
        src: 'pic.twitter.com/g0tGY4FtE4'
      }, {
        word: 'ごはんにする',
        image: 'https://pbs.twimg.com/media/BtcSOp6CcAA9_b4.jpg:large',
        src: 'pic.twitter.com/lcvdPWUnm7'
      }, {
        word: 'ごはんにする',
        image: 'https://pbs.twimg.com/media/BtcSFKpCQAAb73x.jpg:large',
        src: 'pic.twitter.com/J3NNfZqfFF'
      }, {
        word: 'ねる',
        image: 'https://pbs.twimg.com/media/BspWoBQCcAAm9y5.jpg:large',
        src: 'pic.twitter.com/Qa4OOuaSb4'
      }, {
        word: 'ねる',
        image: 'https://pbs.twimg.com/media/BtcSM8BCYAE3_8j.jpg:large',
        src: 'pic.twitter.com/4gZWKWEosT'
      }, {
        word: 'わかった',
        image: 'https://pbs.twimg.com/media/BswuH1qCcAAueYw.jpg:large',
        src: 'pic.twitter.com/TzK4f6K8Cf'
      }, {
        word: 'いけるきがする',
        image: 'https://pbs.twimg.com/media/BswuNkICcAE4olR.jpg:large',
        src: 'pic.twitter.com/npWAwmcME6'
      }, {
        word: 'あせる',
        image: 'https://pbs.twimg.com/media/BswuJviCYAMCdGc.png:large',
        src: 'pic.twitter.com/yh1ObvxjVI'
      }, {
        word: 'しんちょくだめです',
        image: 'https://pbs.twimg.com/media/Bsw1StjCQAA9NQ1.jpg:large',
        src: 'pic.twitter.com/s9R0mikezN'
      }, {
        word: 'きゅうけいにする',
        image: 'https://pbs.twimg.com/media/BswuUTPCYAAVX5n.jpg:large',
        src: 'pic.twitter.com/onsbKNL4H7'
      }, {
        word: 'きゅうけいにする',
        image: 'https://pbs.twimg.com/media/BtcSU0xCcAAmz_W.jpg:large',
        src: 'pic.twitter.com/GBqizwBB0Y'
      }, {
        word: 'おはようございまーす',
        image: 'https://pbs.twimg.com/media/Bs7qd4uCAAAwalT.jpg:large',
        src: 'pic.twitter.com/4EWdIZGmuG'
      }, {
        word: 'おはようございまーす',
        image: 'https://pbs.twimg.com/media/Bts7OpFCcAEkaO4.jpg:large',
        src: 'pic.twitter.com/cGdCEaSfyt'
      }, {
        word: 'つかれた',
        image: 'https://pbs.twimg.com/media/BtcSG05CMAEEyIG.jpg:large',
        src: 'pic.twitter.com/NYs5I3aDP3'
      }, {
        word: 'ありがとうございます',
        image: 'https://pbs.twimg.com/media/BtcSDbWCQAADuhK.jpg:large',
        src: 'pic.twitter.com/LCn2AKuz2s'
      }, {
        word: 'やった',
        image: 'https://pbs.twimg.com/media/Bts7BNsCMAASKsP.jpg:large',
        src: 'pic.twitter.com/ThDlCfuyba'
      },
      {
        "word": "うけおう",
        "image": "https://pbs.twimg.com/media/CmrrV7GUsAIqmc-.jpg:large",
        "src": "pic.twitter.com/aSUWRrQatu"
      },
      {
        "word": "うやまう",
        "image": "https://pbs.twimg.com/media/Cmr90npVIAAV6J0.jpg:large",
        "src": "pic.twitter.com/Hc0Df4VHaN"
      },
      {
        "word": "とまどう",
        "image": "https://pbs.twimg.com/media/Cmr5DwsVMAECUpF.jpg:large",
        "src": "pic.twitter.com/lWcQkg1SYM"
      },
      {
        "word": "ひく",
        "image": "https://pbs.twimg.com/media/Cmrsv21VYAAJ3Q7.jpg:large",
        "src": "pic.twitter.com/1WGn6dQwl0"
      },
      {
        "word": "さそう",
        "image": "https://pbs.twimg.com/media/CmrsmYVUIAEzKen.jpg:large",
        "src": "pic.twitter.com/uHMsUXAIr3"
      },
      {
        "word": "きれる",
        "image": "https://pbs.twimg.com/media/CmrshPNVMAACa0K.jpg:large",
        "src": "pic.twitter.com/IZKbnoHeTS"
      },
      {
        "word": "つばをのむ",
        "image": "https://pbs.twimg.com/media/CmrsAfBUEAA9rKi.jpg:large",
        "src": "pic.twitter.com/fLHk74CYEa"
      },
      {
        "word": "しんどい",
        "image": "https://pbs.twimg.com/media/Cmrr9ETVMAIFLAY.jpg:large",
        "src": "pic.twitter.com/Uw2ISyjmMe"
      },
      {
        "word": "ふんきする",
        "image": "https://pbs.twimg.com/media/Cmrrz7vUIAABFeL.jpg:large",
        "src": "pic.twitter.com/hTlJCmQb2e"
      },
      {
        "word": "けついする",
        "image": "https://pbs.twimg.com/media/CmrraCsUsAADZGZ.jpg:large",
        "src": "pic.twitter.com/PES5cJsSik"
      },
      {
        "word": "やめる",
        "image": "https://pbs.twimg.com/media/CmrrYZvVIAAxrhB.jpg:large",
        "src": "pic.twitter.com/TrC37K4TGK"
      },
      {
        "word": "おわり",
        "image": "https://pbs.twimg.com/media/Cmr5JoGUEAAK8na.jpg:large",
        "src": "pic.twitter.com/vFb4lhDHDw"
      },
      {
        "word": "・・・",
        "image": "https://pbs.twimg.com/media/CmrrQsZUsAAn0QN.jpg:large",
        "src": "pic.twitter.com/3sWRurHFxB"
      },
      {
        "word": "おわる",
        "image": "https://pbs.twimg.com/media/CmrrLn8UcAI_5Rp.jpg:large",
        "src": "pic.twitter.com/QAJRaviNAB"
      },
      {
        "word": "なやむ",
        "image": "https://pbs.twimg.com/media/CmrrIeYUcAAI27E.jpg:large",
        "src": "pic.twitter.com/77GD6NQaIU"
      },
      {
        "word": "がんばる",
        "image": "https://pbs.twimg.com/media/CmrrAP-VYAEJyOq.jpg:large",
        "src": "pic.twitter.com/EGNBqiJVbf"
      },
      {
        "word": "あきらめる",
        "image": "https://pbs.twimg.com/media/Cmrqpp6UkAAg-PQ.jpg:large",
        "src": "pic.twitter.com/dU3hUL7ouA"
      },
      {
        "word": "かえる",
        "image": "https://pbs.twimg.com/media/CmrqkinVUAIA394.jpg:large",
        "src": "pic.twitter.com/6ZyTmEpiVy"
      },
      {
        "word": "つかれた",
        "image": "https://pbs.twimg.com/media/Cmrqf_yUMAAjazF.jpg:large",
        "src": "pic.twitter.com/HpRrLs0xi8"
      },
      {
        "word": "つかれた",
        "image": "https://pbs.twimg.com/media/CmrqeRsUcAA7HaZ.jpg:large",
        "src": "pic.twitter.com/zElQXfLnLJ"
      },
      {
        "word": "がんばる",
        "image": "https://pbs.twimg.com/media/CmrqaHnVUAAXtgO.jpg:large",
        "src": "pic.twitter.com/7LCb9a5VpE"
      },
      {
        "word": "おひるにする",
        "image": "https://pbs.twimg.com/media/CmrqRhBVUAEe9yT.jpg:large",
        "src": "pic.twitter.com/WObHyrMkVJ"
      },
      {
        "word": "あせる",
        "image": "https://pbs.twimg.com/media/CmrqMY7UsAASjJ8.jpg:large",
        "src": "pic.twitter.com/asHiWeJ3mM"
      },
      {
        "word": "しんちょくだめです",
        "image": "https://pbs.twimg.com/media/CmsFmSHVYAA4bE0.jpg:large",
        "src": "pic.twitter.com/XEBdgM0lG4"
      },
      {
        "word": "よった",
        "image": "https://pbs.twimg.com/media/CmsFRBOUcAAGp82.jpg:large",
        "src": "pic.twitter.com/fjDe6HF80D"
      },
      {
        "word": "いぶかしむ",
        "image": "https://pbs.twimg.com/media/CmsFIRqUkAAIWo4.jpg:large",
        "src": "pic.twitter.com/PaAUOHkqn5"
      },
      {
        "word": "おどろく",
        "image": "https://pbs.twimg.com/media/CmsFCKdUMAAfNoF.jpg:large",
        "src": "pic.twitter.com/9FLvUvwdPR"
      }
    ];

    this.random = function() {
      return this.items[Math.floor(Math.random() * this.items.length)];
    }
  });
