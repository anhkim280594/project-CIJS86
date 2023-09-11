import React, { ReactElement } from "react"
export interface ISchool {
  id: number,
  schoolName: string,
}

const schools: ISchool[] = [
  {
    id: 1,
    schoolName: 'iDuhoc',
  },
  {
    id: 2,
    schoolName: 'CodeGym',
  },
  {
    id: 3,
    schoolName: 'LCV',
  },
  {
    id: 4,
    schoolName: 'iSPACE',
  },
  {
    id: 5,
    schoolName: 'MindX',
  },
  {
    id: 6,
    schoolName: 'Học viện đào tạo lập trình MCI',
  },
  {
    id: 7,
    schoolName: 'CodeGym Đà Nẵng',
  },
  {
    id: 8,
    schoolName: 'Trung tâm Nhân Tâm',
  },
  {
    id: 9,
    schoolName: 'Minh Trí Education',
  },
  {
    id: 10,
    schoolName: 'Bee Hero Education',
  },
  {
    id: 11,
    schoolName: 'IELTS AYES - Chinh phục IELTS',
  },
  {
    id: 12,
    schoolName: 'NP English Academy',
  },
  {
    id: 13,
    schoolName: 'Shivom',
  },
  {
    id: 14,
    schoolName: 'Patado',
  },
  {
    id: 15,
    schoolName: 'ACEE English',
  },
  {
    id: 16,
    schoolName: 'Trung tâm ngoại ngữ Iki Edu',
  },
  {
    id: 17,
    schoolName: 'KidZone',
  },
  {
    id: 18,
    schoolName: 'IEC Language',
  },
  {
    id: 19,
    schoolName: 'Tiếng Trung Đông Phong',
  },
  {
    id: 20,
    schoolName: 'SEAMI',
  },
  {
    id: 21,
    schoolName: 'Green Edu Bắc Giang',
  },
  {
    id: 22,
    schoolName: 'Barista School',
  },
  {
    id: 23,
    schoolName: 'Wowkids',
  },
  {
    id: 24,
    schoolName: 'Anh ngữ PeaDu',
  },
  {
    id: 25,
    schoolName: 'New Home English',
  },
  {
    id: 26,
    schoolName: 'Genius English Bắc Giang',
  },
  {
    id: 27,
    schoolName: 'Trung Tâm Anh Ngữ GoldMax',
  },
  {
    id: 28,
    schoolName: 'EZ English HUB',
  },
  {
    id: 29,
    schoolName: 'Army English Center',
  },
  {
    id: 30,
    schoolName: 'Fina',
  },
  {
    id: 31,
    schoolName: 'Hệ Thống Tiếng Anh Trực Tuyến ESO',
  },
  {
    id: 32,
    schoolName: 'AD English',
  },
  {
    id: 33,
    schoolName: 'Keyframe Multimedia School',
  },
  {
    id: 34,
    schoolName: 'Ewin School',
  },
  {
    id: 35,
    schoolName: 'Võ thuật Taekwondo HỒNG ĐỨC',
  },
  {
    id: 36,
    schoolName: 'WECOMMIT',
  },
  {
    id: 37,
    schoolName: 'Edupia - Tiếng Anh Online chất lượng cao',
  },
  {
    id: 38,
    schoolName: 'Anh Ngữ ZEC',
  },
  {
    id: 39,
    schoolName: 'Tổ hợp Giáo dục Nghệ thuật Tí Toáy Atelier',
  },
  {
    id: 40,
    schoolName: 'ECODU - Học Tiếng Anh với giáo viên Philippines',
  },
  {
    id: 41,
    schoolName: 'Học viện Nhân Tài Việt',
  },
  {
    id: 42,
    schoolName: 'Phuong Nam Education',
  },
  {
    id: 43,
    schoolName: 'Tiếng Trung Hương Hương',
  },
  {
    id: 44,
    schoolName: 'Trung tâm đào tạo sửa chữa điện thoại Ngọc Anh',
  },
  {
    id: 45,
    schoolName: 'Trung tâm Ngoại ngữ và Kỹ năng SNOBEL',
  },
  {
    id: 46,
    schoolName: 'Manabie',
  },
  {
    id: 47,
    schoolName: 'TELOS Academy',
  },
  {
    id: 48,
    schoolName: 'Popodoo Ba Vì',
  },
  {
    id: 49,
    schoolName: 'Trung tâm Kỹ năng sống Đức Trí Cường',
  },
  {
    id: 50,
    schoolName: 'S.O.C Institute',
  },
  {
    id: 51,
    schoolName: 'Zest for English',
  },
  {
    id: 52,
    schoolName: 'Du học Trung Quốc Aisi',
  },
  {
    id: 53,
    schoolName: 'Trung tâm Anh Ngữ ADVance',
  },
  {
    id: 54,
    schoolName: 'Trung Tâm Nghệ Thuật Lollipop',
  },
  {
    id: 55,
    schoolName: 'SunUni Academy',
  },
  {
    id: 56,
    schoolName: 'STEP IT Academy',
  },
  {
    id: 57,
    schoolName: 'Alaska English Lĩnh Nam',
  },
  {
    id: 58,
    schoolName: 'Trung Tâm Ngoại Ngữ SEN',
  },
  {
    id: 59,
    schoolName: 'Du học EC Group',
  },
  {
    id: 60,
    schoolName: 'NESTECH',
  },
  {
    id: 61,
    schoolName: 'Daruma Nihongo',
  },
  {
    id: 62,
    schoolName: 'DigiUni Vietnam',
  },
  {
    id: 63,
    schoolName: 'Alibaba English Center',
  },
  {
    id: 64,
    schoolName: 'Data Engineer Coaching 1 on 1 - UniGap',
  },
  {
    id: 65,
    schoolName: 'The English Studio Vietnam',
  },
  {
    id: 66,
    schoolName: 'Schola',
  },
  {
    id: 67,
    schoolName: 'Ngoại ngữ Sao Kim - Venus English Center',
  },
  {
    id: 68,
    schoolName: 'The English Studio Vietnam',
  },
  {
    id: 69,
    schoolName: 'ELA EDU',
  },
  {
    id: 70,
    schoolName: 'Rikkei Academy',
  },
  {
    id: 71,
    schoolName: 'Anh Ngữ BalaBala',
  },
  {
    id: 72,
    schoolName: 'KONIFER Kindergarten',
  },
  {
    id: 73,
    schoolName: 'Shelton English Vietnam',
  },
]
export default schools