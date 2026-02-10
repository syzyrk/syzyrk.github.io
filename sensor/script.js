const https = require('https');
const fs = require('fs');

const URL = "https://data.sensor.community/static/v2/data.json";
const LOCATION_ID = 10857;

https.get(URL, (res) => {
    let body = "";
    res.on("data", (chunk) => body += chunk);
    res.on("end", () => {
        try {
            const jsonData = JSON.parse(body);
            let wynik = { pm10: null, pm25: null, temp: null, humid: null };

            // Filtrowanie i mapowanie
            jsonData.forEach(item => {
                if (item.location && item.location.id == LOCATION_ID) {
                    item.sensordatavalues.forEach(sdv => {
                        switch (sdv.value_type) {
                            case "P1":          wynik.pm10 = sdv.value; break;
                            case "P2":          wynik.pm25 = sdv.value; break;
                            case "temperature": wynik.temp = sdv.value; break;
                            case "humidity":    wynik.humid = sdv.value; break;
                        }
                    });
                }
            });

            // Zapis do pliku
            fs.writeFileSync('data.json', JSON.stringify(wynik, null, 2));
            console.log("Plik data.json został zaktualizowany!");
        } catch (e) {
            console.error("Błąd:", e.message);
            process.exit(1);
        }
    });
}).on("error", (e) => {
    console.error(e.message);
    process.exit(1);
});
