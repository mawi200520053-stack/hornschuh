import { groq } from "next-sanity";

export const STELLEN_QUERY = groq`
  *[_type == "stelle"] | order(_createdAt desc) {
    "id": id.current,
    titel,
    datum,
    kurztext,
    einleitung,
    aufgaben,
    profil,
    bieten
  }
`;

export const PROJEKTE_QUERY = groq`
  *[_type == "projekt"] | order(reihenfolge asc, _createdAt desc) {
    "id": id.current,
    titel,
    kategorien,
    jahr,
    auftraggeber,
    leistungsumfang,
    "titelBild": titelBild.asset->url,
    "galerie": galerie[].asset->url
  }
`;

export const PROJEKTE_IDS_QUERY = groq`*[_type == "projekt"] { "id": id.current }`;

export const PROJEKT_BY_ID_QUERY = groq`
  *[_type == "projekt" && id.current == $id][0] {
    "id": id.current,
    titel,
    kategorien,
    jahr,
    auftraggeber,
    leistungsumfang,
    "titelBild": titelBild.asset->url,
    "galerie": galerie[].asset->url,
    "video": video.asset->url,
    "prevId": *[_type == "projekt" && reihenfolge < ^.reihenfolge] | order(reihenfolge desc)[0].id.current,
    "nextId": *[_type == "projekt" && reihenfolge > ^.reihenfolge] | order(reihenfolge asc)[0].id.current
  }
`;
