dataSetVersion = "2025-03-18"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Album",
    key: "album",
    tooltip: "Check this to restrict to certain albums.",
    checked: false,
    sub: [
      { name: "From Her To Eternity", tooltip: "1984", key: "FHtE" },
      { name: "The Firstborn Is Dead", tooltip: "1985", key: "TFiD" },
      { name: "Kicking Against the Pricks", tooltip: "1986", key: "KAtP" },
      { name: "Your Funeral ... My Trial", tooltip: "1986", key: "YFMC" },
      { name: "Tender Prey", tooltip: "1987", key: "TP" },
      { name: "The Good Son", tooltip: "1990", key: "TGS" },
      { name: "Henry’s Dream", tooltip: "1992", key: "HD" },
      { name: "Let Love In" , tooltip: "1994", key: "LLI" },
      { name: "Murder Ballads", tooltip: "1996", key: "MB" },
      { name: "The Boatman's Call", tooltip: "1997", key: "TBC" },
      { name: "No More Shall We Part", tooltip: "2001", key: "NMSWP" },
      { name: "Nocturama", tooltip: "2003", key: "NCRM" },
      { name: "Abattoir Blues / The Lyre of Orpheus", tooltip: "2004", key: "AB/TLoO" },
      { name: "Dig, Lazarus, Dig!!!", tooltip: "2008", key: "DLD" },
      { name: "Push The Sky Away", tooltip: "2013", key: "PtSA" },
      { name: "Skeleton Tree", tooltip: "2016", key: "ST" },
      { name: "Ghosteen", tooltip: "2019", key: "GST" },
      { name: "Wild God", tooltip: "2024", key: "WG" },
      { name: "Hee Haw/The Birthday Party", tooltip: "1979/1981", key: "HH/TBP" },
      { name: "Prayers on Fire", tooltip: "1981", key: "PoF" },
      { name: "Junkyard", tooltip: "1982", key: "JY" },
      { name: "The Bad Seed", tooltip: "1983", key: "TBS" },
      { name: "Mutiny!", tooltip: "1983", key: "MTN" },
      { name: "Grinderman", tooltip: "2006", key: "GRDM" },
      { name: "Grinderman 2", tooltip: "2010", key: "GRDM2" },
      { name: "Carnage", tooltip: "2021", key: "CNG" },
    ]
  },
  {
    name: "Remove Covers",
    key: "covers",
    tooltip: "Check this to remove all cover songs that doesn’t appear in Kicking Against The Pricks."
  },
  {
    name: "Remove Non-enssential songs",
    key: "notmust",
    tooltip: "Check this to remove all unbolded songs and songs that have a relateively low rating on unbolded albums. Data from RYM."
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Avalanche",
    img: "k9GXCor.png",
    opts: {
      album: [ "FHtE" ],
      cover: true
    }
  },
  {
    name: "Cabin Fever!",
    img: "k9GXCor.png",
    opts: {
      album: [ "FHtE" ],
      
    }
  },
  {
    name: "Well of Misery",
    img: "k9GXCor.png",
    opts: {
      album: ["FHtE"],
      notmust: true
    }
  },
  {
    name: "From Her to Eternity",
    img: "k9GXCor.png",
    opts: {
      album: ["FHtE"],
    },
  },
  {
    name: "Saint Huck",
    img: "k9GXCor.png",
    opts: {
      album: [ "FHtE" ],
    }
  },
  {
    name: "Wings Off Flies",
    img: "k9GXCor.png",
    opts: {
      album: [ "FHtE" ],
      notmust: true
    }
  },
 {
    name: "A Box for Black Paul",
    img: "k9GXCor.png",
    opts: {
      album: [ "FHtE" ],
      notmust: true
    }
  },

  },
  {
    name: "Patchouli Knowledge",
    img: "A7ZnuHo.png",
    opts: {
      album: ["book", "EoSD", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Izayoi Sakuya",
    img: "sgZPf11.png",
    opts: {
      album: [ "book", "EoSD", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "HM", "DDC", "ISC", "UM" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Remilia Scarlet",
    img: "8UX7hKE.png",
    opts: {
      album: ["book", "EoSD", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Flandre Scarlet",
    img: "OhaDcnc.png",
    opts: {
      album: ["book", "EoSD", "StB", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Letty Whiterock",
    img: "MgzqjFK.png",
    opts: {
      album: ["book", "PCB", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Chen",
    img: "ohmetZh.png",
    opts: {
      album: ["book", "PCB", "IaMP", "StB", "SWR", "soku", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Alice Margatroid",
    img: "aDIf0pN.png",
    opts: {
      album: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Lily White",
    img: "2Pr8b2N.png",
    opts: {
      album: ["book", "PCB", "PoFV", "HM", "HSiFS"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Lunasa Prismriver",
    img: "htOMdDQ.png",
    opts: {
      album: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Merlin Prismriver",
    img: "PrRPujP.png",
    opts: {
      album: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Lyrica Prismriver",
    img: "ze79bFC.png",
    opts: {
      album: ["book", "PCB", "PoFV", "HM", "AoCF"],
      stage: ["st4"]
    }
  },
  {
    name: "Konpaku Youmu",
    img: "WMjyRLJ.png",
    opts: {
      album: [ "book", "PCB", "IaMP", "IN", "PoFV", "StB", "SWR", "soku", "TD", "HM", "ISC", "WBaWC" ],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Saigyouji Yuyuko",
    img: "VT9mTGb.png",
    opts: {
      album: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "TD", "HM", "ISC", "VD" ],
      stage: ["st1", "st6"]
    }
  },
  {
    name: "Yakumo Ran",
    img: "rshnJPV.png",
    opts: {
      album: ["book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Yakumo Yukari",
    img: "qsceD4I.png",
    opts: {
      album: [ "book", "PCB", "IaMP", "IN", "StB", "SWR", "soku", "HM", "ISC", "AoCF", "VD" ],
      stage: ["ex"]
    }
  },
  {
    name: "Ibuki Suika",
    img: "pLdMjQ3.png",
    opts: {
      album: ["book", "IaMP", "StB", "SWR", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Wriggle Nightbug",
    img: "8DLUAPf.png",
    opts: {
      album: ["book", "IN", "StB", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mystia Lorelei",
    img: "6KyhLqE.png",
    opts: {
      album: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kamishirasawa Keine",
    img: "99w0Chm.png",
    opts: {
      album: ["book", "IN", "StB", "HM", "ISC"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Inaba Tewi",
    img: "yqNfNje.png",
    opts: {
      album: ["book", "IN", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Reisen Udongein Inaba",
    img: "PrYzRcC.png",
    opts: {
      album: ["book", "IN", "PoFV", "StB", "soku", "HM", "LoLK", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Yagokoro Eirin",
    img: "ceo4DhK.png",
    opts: {
      album: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houraisan Kaguya",
    img: "2YDuTk3.png",
    opts: {
      album: ["book", "IN", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Fujiwara no Mokou",
    img: "3zo4VKV.png",
    opts: {
      album: ["book", "IN", "StB", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Shameimaru Aya",
    img: "8TLXMST.png",
    opts: {
      album: [ "book", "PoFV", "StB", "SWR", "MoF", "soku", "HM", "ISC", "HSiFS" ],
      stage: ["st4"]
    }
  },
  {
    name: "Medicine Melancholy",
    img: "IImsp7K.png",
    opts: {
      album: ["book", "PoFV", "StB", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kazami Yuuka",
    img: "MZXJQq5.png",
    opts: {
      album: ["book", "PoFV", "StB", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Onozuka Komachi",
    img: "aX4WIH8.png",
    opts: {
      album: ["book", "PoFV", "StB", "SWR", "soku", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Shiki Eiki, Yamaxanadu",
    img: "nPBvatH.png",
    opts: {
      album: ["book", "PoFV", "StB", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Aki Shizuha",
    img: "3pDRgvR.png",
    opts: {
      album: ["MoF", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Aki Minoriko",
    img: "bV0DaN7.png",
    opts: {
      album: ["MoF", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Kagiyama Hina",
    img: "J11NjNj.png",
    opts: {
      album: ["MoF", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Kawashiro Nitori",
    img: "4Ufced2.png",
    opts: {
      album: ["MoF", "DS", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Inubashiri Momiji",
    img: "qGMjnYk.png",
    opts: {
      album: ["MoF", "DS", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Kochiya Sanae",
    img: "ATTRSWU.png",
    opts: {
      album: ["MoF", "SA", "UFO", "soku", "DS", "TD", "HM", "ISC", "LoLK", "UM"],
      stage: ["st5", "ex"]
    }
  },
  {
    name: "Yasaka Kanako",
    img: "nQ78Lz7.png",
    opts: {
      album: ["MoF", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Moriya Suwako",
    img: "yJaD5ZV.png",
    opts: {
      album: ["MoF", "SA", "soku", "DS", "HM", "ISC", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nagae Iku",
    img: "xgAlECj.png",
    opts: {
      album: ["SWR", "soku", "DS", "HM", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Hinanawi Tenshi",
    img: "tZLYivt.png",
    opts: {
      album: ["SWR", "soku", "DS", "HM", "ISC", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Kisume",
    img: "VgJgaEf.png",
    opts: {
      album: ["SA", "DS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurodani Yamame",
    img: "sqgJ2St.png",
    opts: {
      album: ["SA", "DS", "HM"],
      stage: ["st1"]
    }
  },
  {
    name: "Mizuhashi Parsee",
    img: "lkoAJod.png",
    opts: {
      album: ["SA", "DS", "HM"],
      stage: ["st2"]
    }
  },
  {
    name: "Hoshiguma Yuugi",
    img: "tDO653L.png",
    opts: {
      album: ["SA", "DS", "HM"],
      stage: ["st3"]
    }
  },
  {
    name: "Komeiji Satori",
    img: "dup7Nt6.png",
    opts: {
      album: ["SA", "DS", "HM", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Kaenbyou Rin (Orin)",
    img: "uQjbw1W.png",
    opts: {
      album: ["SA", "DS", "HM"],
      stage: ["st4", "st5", "st6"]
    }
  },
  {
    name: "Reiuji Utsuho (Okuu)",
    img: "DfdaXPW.png",
    opts: {
      album: ["SA", "soku", "DS", "HM", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Komeiji Koishi",
    img: "wVCcens.png",
    opts: {
      album: ["SA", "DS", "HM", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Nazrin",
    img: "EpHQbiY.png",
    opts: {
      album: ["UFO", "DS", "HM"],
      stage: ["st1", "st5"]
    }
  },
  {
    name: "Tatara Kogasa",
    img: "kJbv4dc.png",
    opts: {
      album: ["UFO", "TD", "DS", "HM"],
      stage: ["st2", "ex"]
    }
  },
  {
    name: "Kumoi Ichirin",
    img: "Fyn5yVx.png",
    opts: {
      album: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"]
    }
  },
  {
    name: "Murasa Minamitsu",
    img: "39KYpvW.png",
    opts: {
      album: ["UFO", "DS", "HM"],
      stage: ["st4"]
    }
  },
  {
    name: "Toramaru Shou",
    img: "5yihisu.png",
    opts: {
      album: ["UFO", "DS", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Hijiri Byakuren",
    img: "2ppPxny.png",
    opts: {
      album: ["UFO", "DS", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Houjuu Nue",
    img: "zL4S8Mj.png",
    opts: {
      album: ["UFO", "DS", "TD", "HM", "VD"],
      stage: ["st4", "st6", "ex"]
    }
  },
  {
    name: "Himekaidou Hatate",
    img: "LgvoTaJ.png",
    opts: {
      album: ["DS", "HM", "ISC"],
      stage: ["ex"]
    }
  },
  {
    name: "Sunny Milk",
    img: "VbqXiB6.png",
    opts: {
      album: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Luna Child",
    img: "OBqgP48.png",
    opts: {
      album: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Star Sapphire",
    img: "sNw61ap.png",
    opts: {
      album: ["book", "GFW", "HM"],
      stage: ["st1", "st2", "st3"]
    }
  },
  {
    name: "Kasodani Kyouko",
    img: "sLiqEBA.png",
    opts: {
      album: ["TD", "HM", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Miyako Yoshika",
    img: "6jq6eh6.png",
    opts: {
      album: ["TD", "HM", "ISC"],
      stage: ["st3", "st4"]
    }
  },
  {
    name: "Kaku Seiga",
    img: "090hLPL.png",
    opts: {
      album: ["TD", "HM", "ISC"],
      stage: ["st4"]
    }
  },
  {
    name: "Soga no Tojiko",
    img: "y0UXwFO.png",
    opts: {
      album: ["TD", "HM"],
      stage: ["st5"]
    }
  },
  {
    name: "Mononobe no Futo",
    img: "WTZ97LE.png",
    opts: {
      album: ["TD", "HM", "ISC", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Toyosatomimi no Miko",
    img: "3Xiqd22.png",
    opts: {
      album: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Futatsuiwa Mamizou",
    img: "gMpWdmA.png",
    opts: {
      album: ["TD", "HM", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Hata no Kokoro",
    img: "fxCGmUk.png",
    opts: {
      album: ["book", "HM", "ULiL", "AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Wakasagihime",
    img: "brWCLVx.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st1"]
    }
  },
  {
    name: "Sekibanki",
    img: "VAMLiJD.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st2"]
    }
  },
  {
    name: "Imaizumi Kagerou",
    img: "qwwL0bB.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st3"]
    }
  },
  {
    name: "Tsukumo Benben",
    img: "vWNeMaH.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Tsukumo Yatsuhashi",
    img: "EJFQHQN.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st4", "ex"]
    }
  },
  {
    name: "Kijin Seija",
    img: "16RUacj.png",
    opts: {
      album: ["DDC", "ISC"],
      stage: ["st5", "st6"]
    }
  },
  {
    name: "Sukuna Shinmyoumaru",
    img: "Zl2tN7W.png",
    opts: {
      album: ["DDC", "ISC", "ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Horikawa Raiko",
    img: "SLLEccR.png",
    opts: {
      album: ["DDC", "ISC", "AoCF", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Usami Sumireko",
    img: "mc7ICW6.png",
    opts: {
      album: ["ULiL", "AoCF", "VD"],
      stage: ["st6"]
    }
  },
  {
    name: "Seiran",
    img: "0ra00WG.png",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Ringo",
    img: "xQOsFlZ.png",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Doremy Sweet",
    img: "rGS7dyn.png",
    opts: {
      album: ["LoLK", "AoCF", "VD"],
      stage: ["st3", "ex"]
    }
  },
  {
    name: "Kishin Sagume",
    img: "HLT338X.png",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Clownpiece",
    img: "9Jje7ZQ.jpg",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Junko",
    img: "NsfLZjY.jpg",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Hecatia Lapislazuli",
    img: "EH3Ulol.png",
    opts: {
      album: ["LoLK", "VD"],
      stage: ["ex"]
    }
  },
  {
    name: "Eternity Larva",
    img: "ql5KxJH.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st1"]
    }
  },
  {
    name: "Sakata Nemuno",
    img: "gYFhJ3Y.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st2"]
    }
  },
  {
    name: "Komano Aunn",
    img: "wWUStkF.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st3"]
    }
  },
  {
    name: "Yatadera Narumi",
    img: "wrPVhAo.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st4"]
    }
  },
  {
    name: "Nishida Satono",
    img: "8w9gAy2.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Teireida Mai",
    img: "DesAqAC.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st5"]
    }
  },
  {
    name: "Matara Okina",
    img: "icWvMyo.png",
    opts: {
      album: ["HSiFS", "VD"],
      stage: ["st6", "ex"]
    }
  },
  {
    name: "Yorigami Shion",
    img: "LenxXR4.png",
    opts: {
      album: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Yorigami Joon",
    img: "V9OznT1.png",
    opts: {
      album: ["AoCF"],
      stage: ["st6"]
    }
  },
  {
    name: "Ebisu Eika",
    img: "Ke3316E.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st1"]
    }
  },
  {
    name: "Ushizaki Urumi",
    img: "ru2vIIW.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st2"]
    }
  },
  {
    name: "Niwatari Kutaka",
    img: "QTQt0ZL.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st3"]
    }
  },
  {
    name: "Kicchou Yachie",
    img: "CzcIMxF.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st4"]
    }
  },
  {
    name: "Joutouguu Mayumi",
    img: "GxeziYO.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st5"]
    }
  },
  {
    name: "Haniyasushin Keiki",
    img: "Z4jclTi.png",
    opts: {
      album: ["WBaWC"],
      stage: ["st6"]
    }
  },
  {
    name: "Kurokoma Saki",
    img: "H2v2GPy.png",
    opts: {
      album: ["WBaWC"],
      stage: ["ex"]
    }
  },
  {
    name: "Goutokuji Mike",
    img: "FltSdtv.png",
    opts: {
      album: ["UM"],
      stage: ["st1"]
    }
  },
  {
    name: "Yamashiro Takane",
    img: "Aaq99GQ.png",
    opts: {
      album: ["UM"],
      stage: ["st2"]
    }
  },
  {
    name: "Komakusa Sannyo",
    img: "DKupiv1.png",
    opts: {
      album: ["UM"],
      stage: ["st3"]
    }
  },
  {
    name: "Tamatsukuri Misumaru",
    img: "BHwfCAQ.png",
    opts: {
      album: ["UM"],
      stage: ["st4"]
    }
  },
  {
    name: "Kudamaki Tsukasa",
    img: "KNy3FZq.png",
    opts: {
      album: ["UM"],
      stage: ["st5", "st6", "ex"]
    }
  },
  {
    name: "Iizunamaru Megumu",
    img: "QA63m27.png",
    opts: {
      album: ["UM"],
      stage: ["st5"]
    }
  },
  {
    name: "Tenkyuu Chimata",
    img: "Ga4AYtv.png",
    opts: {
      album: ["UM"],
      stage: ["st6"]
    }
  },
  {
    name: "Himemushi Momoyo",
    img: "iH2wqbd.png",
    opts: {
      album: ["UM"],
      stage: ["ex"]
    }
  },
  {
    name: "Hieda no Akyuu",
    img: "ogONuLZ.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  { 
    name: "Tokiko",
    img: "Y4maOc8.png", 
    opts: {
      album: ["book"],
      stage: [],
      nameless: true
    } 
  },
  {
    name: "Reisen (Manga)",
    img: "cWjCo2j.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Toyohime",
    img: "uEBxsEX.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Watatsuki no Yorihime",
    img: "Txu2P7S.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Maribel Hearn",
    img: "XUI9vPo.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Usami Renko",
    img: "1P5EXRt.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Ibaraki Kasen",
    img: "dQHnPPe.png",
    opts: {
      album: ["book", "ULiL", "AoCF"],
      stage: ["st5"]
    }
  },
  {
    name: "Motoori Kosuzu",
    img: "jEsJJo8.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Okunoda Miyoi",
    img: "a5V63gx.png",
    opts: {
      album: ["book"],
      stage: []
    }
  },
  {
    name: "Hakurei Reimu (PC-98)",
    img: "IZsGAMS.png",
    opts: {
      album: ["HRtP", "SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  {
    name: "Shingyoku (Female)",
    img: "KuPiR2k.png",
    opts: {
      album: ["HRtP"],
      stage: ["st1"]
    }
  },
  {
    name: "Mima",
    img: "odH03t2.png",
    opts: {
      album: ["HRtP", "SoEW", "PoDD", "MS"],
      stage: ["st3", "st5", "st6"]
    }
  },
  {
    name: "Elis",
    img: "ytnL1xd.png",
    opts: {
      album: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Kikuri",
    img: "fX2Kqik.png",
    opts: {
      album: ["HRtP"],
      stage: ["st5"]
    }
  },
  {
    name: "Sariel",
    img: "Wyc7YFw.png",
    opts: {
      album: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Konngara",
    img: "dg9jLHv.png",
    opts: {
      album: ["HRtP"],
      stage: ["st6"]
    }
  },
  {
    name: "Rika",
    img: "02Xb4pU.png",
    opts: {
      album: ["SoEW"],
      stage: ["st1", "ex"]
    }
  },
  {
    name: "Meira",
    img: "p529JgT.png",
    opts: {
      album: ["SoEW"],
      stage: ["st2"]
    }
  },
  {
    name: "Kirisame Marisa (PC-98)",
    img: "wxE7cBm.png",
    opts: {
      album: ["SoEW", "PoDD", "LLS", "MS"],
      stage: ["st4"],
      pc98: true
    }
  },
  { name: "Ellen", img: "3iNNL0c.png", opts: {
      album: ["PoDD"],
      stage: []
    } },
  {
    name: "Kotohime",
    img: "kRSGtpq.png",
    opts: {
      album: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kana Anaberal",
    img: "rBvKMk5.png",
    opts: {
      album: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Asakura Rikako",
    img: "VIf5gUK.png",
    opts: {
      album: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Kitashirakawa Chiyuri",
    img: "tZFBycy.png",
    opts: {
      album: ["PoDD"],
      stage: ["st5"]
    }
  },
  {
    name: "Okazaki Yumemi",
    img: "c9rnG3n.png",
    opts: {
      album: ["PoDD"],
      stage: ["st6"]
    }
  },
  {
    name: "Ruukoto",
    img: "dko67SJ.png",
    opts: {
      album: ["PoDD"],
      stage: []
    }
  },
  {
    name: "Orange",
    img: "m8wXE5U.png",
    opts: {
      album: ["LLS"],
      stage: ["st1"]
    }
  },
  {
    name: "Kurumi",
    img: "0rvq1ph.png",
    opts: {
      album: ["LLS"],
      stage: ["st2"]
    }
  },
  {
    name: "Elly",
    img: "iIPftHn.png",
    opts: {
      album: ["LLS"],
      stage: ["st3"]
    }
  },
  {
    name: "Yuuka (PC-98)",
    img: "ivUSwxp.png",
    opts: {
      album: ["LLS", "MS"],
      stage: ["st5", "st6"],
      pc98: true
    }
  },
  {
    name: "Mugetsu",
    img: "bYA9E16.png",
    opts: {
      album: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Gengetsu",
    img: "TIOTtV9.png",
    opts: {
      album: ["LLS"],
      stage: ["ex"]
    }
  },
  {
    name: "Sara",
    img: "2QUbCrU.png",
    opts: {
      album: ["MS"],
      stage: ["st1"]
    }
  },
  {
    name: "Louise",
    img: "nDM5aB6.png",
    opts: {
      album: ["MS"],
      stage: ["st2", "st4"]
    }
  },
  {
    name: "Alice (PC-98)",
    img: "KaBuRTW.png",
    opts: {
      album: ["MS"],
      stage: ["st3", "ex"],
      pc98: true
    }
  },
  {
    name: "Yuki",
    img: "FfcmDgp.png",
    opts: {
      album: ["MS"],
      stage: ["st4"]
    }
  },
  { name: "Mai", img: "r6w7TX1.png", opts: {
      album: ["MS"],
      stage: ["st4"]
    } },
  {
    name: "Yumeko",
    img: "PcPqkdO.png",
    opts: {
      album: ["MS"],
      stage: ["st5"]
    }
  },
  {
    name: "Shinki",
    img: "gPE95S7.png",
    opts: {
      album: ["MS"],
      stage: ["st6"]
    }
  },
  {
    name: "Mimi-chan",
    img: "zBl2zlv.png",
    opts: {
      album: ["PoDD"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Unzan",
    img: "r5eWREh.png",
    opts: {
      album: ["UFO", "DS", "HM", "ULiL", "AoCF"],
      stage: ["st3"],
      notgirl: true
    }
  },
  {
    name: "Genji",
    img: "LoUqOuH.png",
    opts: {
      album: ["SoEW", "PoDD", "LLS", "MS"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Shingyoku (Male)",
    img: "a5uwlgN.png",
    opts: {
      album: ["HRtP"],
      stage: ["st1"],
      notgirl: true 
    }
  },
  {
    name: "YuugenMagan",
    img: "IOW8GdU.png",
    opts: {
      album: ["HRtP"],
      stage: ["st3"],
      notgirl: true 
    }
  },
  {
    name: "Evil Eye Sigma",
    img: "rAFUMwE.png",
    opts: {
      album: ["SoEW"],
      stage: ["ex"],
      notgirl: true 
    }
  },
  {
    name: "Great Catfish",
    img: "BgRi9Oh.png",
    opts: {
      album: ["soku", "AoCF"],
      stage: ["st6"],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Morichika Rinnosuke",
    img: "ITUhsGj.png",
    opts: {
      album: ["book", "HM"],
      stage: [],
      notgirl: true 
    }
  },
  {
    name: "Fortune Teller",
    img: "BYot23O.png",
    opts: {
      album: ["book"],
      stage: [],
      notgirl: true,
      nameless: true
    }
  },
  {
    name: "Hisoutensoku",
    img: "P4JZ2it.png",
    opts: {
      album: ["soku"],
      stage: [],
      notgirl: true 
    }
  }
];
