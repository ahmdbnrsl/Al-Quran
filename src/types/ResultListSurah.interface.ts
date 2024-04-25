export interface DetailList {
    _id?: string;
    nomor?: number;
    nama?: string;
    nama_latin?: string;
    jumlah_ayat?: number;
    tempat_turun?: string;
    arti?: string;
    deskripsi?: string;
    audio?: string;
}

export interface ResultListSurah {
    [index: number]: DetailList;
}