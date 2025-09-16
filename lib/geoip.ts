import * as maxmind from "maxmind";

let geoReader: maxmind.Reader<any> | null = null;

export async function initGeoIP() {
  if (!geoReader) {
    geoReader = await maxmind.open("./geoip/GeoLite2-City.mmdb");
  }
  return geoReader;
}

export async function lookupIP(ip: string) {
  const reader = await initGeoIP();
  const result = reader.get(ip);

  if (!result) return null;

  return {
    country: result.country?.iso_code ?? "",
    region: result.subdivisions?.[0]?.names?.en ?? "",
    city: result.city?.names?.en ?? "",
    latitude: result.location?.latitude ?? null,
    longitude: result.location?.longitude ?? null,
  };
}