import { useEffect, useState } from "react";
import Albania from "../../../../assets/images/countries/Albania.png";
import Algeria from "../../../../assets/images/countries/Algeria.png";
import Andorra from "../../../../assets/images/countries/Andorra.png";
import Armenia from "../../../../assets/images/countries/Armenia.png";
import Australia from "../../../../assets/images/countries/Australia.png";
import Austria from "../../../../assets/images/countries/Austria.png";
import Belgium from "../../../../assets/images/countries/Belgium.png";
import Bosnia from "../../../../assets/images/countries/Bosnia.png";
import Bulgaria from "../../../../assets/images/countries/Bulgaria.png";
import China from "../../../../assets/images/countries/China.png";
import Cyprus from "../../../../assets/images/countries/Cyprus.png";
import Czech from "../../../../assets/images/countries/Czech.png";
import Denmark from "../../../../assets/images/countries/Denmark.png";
import Egypt from "../../../../assets/images/countries/Egypt.png";
import Estonia from "../../../../assets/images/countries/Estonia.png";
import Finland from "../../../../assets/images/countries/Finland.png";
import France from "../../../../assets/images/countries/France.png";
import Georgia from "../../../../assets/images/countries/Georgia.png";
import Germany from "../../../../assets/images/countries/Germany.png";
import Gibralta from "../../../../assets/images/countries/Gibralta.png";
import Greece from "../../../../assets/images/countries/Greece.png";
import Group from "../../../../assets/images/countries/Group.png";
import Honkkong from "../../../../assets/images/countries/Hong.png";
import Hungary from "../../../../assets/images/countries/Hungary.png";
import Iceland from "../../../../assets/images/countries/Iceland.png";
import India from "../../../../assets/images/countries/India.png";
import Indonesia from "../../../../assets/images/countries/Indonesia.png";
import Ireland from "../../../../assets/images/countries/Ireland.png";
import Italy from "../../../../assets/images/countries/Italy.png";
import Japan from "../../../../assets/images/countries/Japan.png";
import Jordan from "../../../../assets/images/countries/Jordan.png";
import Kuwait from "../../../../assets/images/countries/Kuwait.png";
import Latvia from "../../../../assets/images/countries/Latvia.png";
import Liechtenstein from "../../../../assets/images/countries/Liechtenstein.png";
import Lithuania from "../../../../assets/images/countries/Lithuania.png";
import Luxembourg from "../../../../assets/images/countries/Luxembourg.png";
import Malta from "../../../../assets/images/countries/Malta.png";
import Moldova from "../../../../assets/images/countries/Moldova.png";
import Monaco from "../../../../assets/images/countries/Monaco.png";
import Montenegro from "../../../../assets/images/countries/Montenegro.png";
import Morocco from "../../../../assets/images/countries/Morocco.png";
import Netherlands from "../../../../assets/images/countries/Netherlands.png";
import NewZealand from "../../../../assets/images/countries/New Zealand.png";
import Nigeria from "../../../../assets/images/countries/Nigeria.png";
import NorthMacedonia from "../../../../assets/images/countries/North Macedonia.png";
import Norway from "../../../../assets/images/countries/Norway.png";
import Oman from "../../../../assets/images/countries/Oman.png";
import Poland from "../../../../assets/images/countries/Poland.png";
import Portugal from "../../../../assets/images/countries/Portugal.png";
import Qatar from "../../../../assets/images/countries/Qatar.png";
import Romania from "../../../../assets/images/countries/Romania.png";
import SaudiArabia from "../../../../assets/images/countries/SaudiArabia.png";
import Singapore from "../../../../assets/images/countries/Singapore.png";
import Slovakia from "../../../../assets/images/countries/Slovakia.png";
import Slovenia from "../../../../assets/images/countries/Slovenia.png";
import SouthKorea from "../../../../assets/images/countries/South Korea.png";
import Spain from "../../../../assets/images/countries/Spain.png";
import Switzerland from "../../../../assets/images/countries/Switzerland.png";
import Taiwan from "../../../../assets/images/countries/Taiwan.png";
import Tunisia from "../../../../assets/images/countries/Tunisia.png";
import Turkey from "../../../../assets/images/countries/Turkey.png";
import Ukraine from "../../../../assets/images/countries/Ukraine.png";
import UAE from "../../../../assets/images/countries/United Arab Emirates.png";
import UnitedKingdom from "../../../../assets/images/countries/United Kingdom.png";

import "./location.css";
const Location = ({ setCountry, setLocation, location, country }) => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState([]);
  const Countries = [
    {
      icon: Albania,
      name: "Albania",
    },
    {
      icon: Spain,
      name: "Spain",
    },
    {
      icon: Switzerland,
      name: "Switzerland",
    },
    {
      icon: Taiwan,
      name: "Taiwan",
    },
    {
      icon: Tunisia,
      name: "Tunisia",
    },
    {
      icon: Turkey,
      name: "Turkey",
    },
    {
      icon: UAE,
      name: "United Arab Emirates",
    },
    {
      icon: UnitedKingdom,
      name: "United Kingdom",
    },
    {
      icon: Ukraine,
      name: "Ukraine",
    },
    {
      icon: Algeria,
      name: "Algeria",
    },
    {
      icon: Andorra,
      name: "Andorra",
    },
    {
      icon: Armenia,
      name: "Armenia",
    },
    {
      icon: Australia,
      name: "Australia",
    },
    {
      icon: Austria,
      name: "Austria",
    },
    {
      icon: Belgium,
      name: "Belgium",
    },
    {
      icon: Bosnia,
      name: "Bosnia",
    },
    {
      icon: Bulgaria,
      name: "Bulgaria",
    },
    {
      icon: China,
      name: "China",
    },
    {
      icon: Cyprus,
      name: "Cyprus",
    },
    {
      icon: Czech,
      name: "Czech Republic",
    },
    {
      icon: Denmark,
      name: "Denmark",
    },
    {
      icon: Egypt,
      name: "Egypt",
    },
    {
      icon: Estonia,
      name: "Estonia",
    },
    {
      icon: Finland,
      name: "Finland",
    },
    {
      icon: France,
      name: "France",
    },
    {
      icon: Georgia,
      name: "Georgia",
    },
    {
      icon: Germany,
      name: "Germany",
    },
    {
      icon: Gibralta,
      name: "Gibralta",
    },
    {
      icon: Greece,
      name: "Greece",
    },
    {
      icon: Group,
      name: "Group",
    },
    {
      icon: Honkkong,
      name: "Hong Kong",
    },
    {
      icon: Hungary,
      name: "Hungary",
    },
    {
      icon: Iceland,
      name: "Iceland",
    },
    {
      icon: India,
      name: "India",
    },
    {
      icon: Indonesia,
      name: "Indonesia",
    },
    {
      icon: Ireland,
      name: "Ireland",
    },
    {
      icon: Italy,
      name: "Italy",
    },
    {
      icon: Japan,
      name: "Japan",
    },
    {
      icon: Jordan,
      name: "Jordan",
    },
    {
      icon: Kuwait,
      name: "Kuwait",
    },
    {
      icon: Latvia,
      name: "Latvia",
    },
    {
      icon: Liechtenstein,
      name: "Liechtenstein",
    },
    {
      icon: Lithuania,
      name: "Lithuania",
    },
    {
      icon: Luxembourg,
      name: "Luxembourg",
    },
    {
      icon: Malta,
      name: "Malta",
    },
    {
      icon: Moldova,
      name: "Moldova",
    },
    {
      icon: Monaco,
      name: "Monaco",
    },
    {
      icon: Montenegro,
      name: "Montenegro",
    },
    {
      icon: Morocco,
      name: "Morocco",
    },
    {
      icon: Netherlands,
      name: "Netherlands",
    },
    {
      icon: NewZealand,
      name: "New Zealand",
    },
    {
      icon: Nigeria,
      name: "Nigeria",
    },
    {
      icon: NorthMacedonia,
      name: "North Macedonia",
    },
    {
      icon: Norway,
      name: "Norway",
    },
    {
      icon: Oman,
      name: "Oman",
    },
    {
      icon: Poland,
      name: "Poland",
    },
    {
      icon: Portugal,
      name: "Portugal",
    },
    {
      icon: Qatar,
      name: "Qatar",
    },
    {
      icon: Romania,
      name: "Romania",
    },
    {
      icon: SaudiArabia,
      name: "Saudi Arabia",
    },
    {
      icon: Singapore,
      name: "Singapore",
    },
    {
      icon: Slovakia,
      name: "Slovakia",
    },
    {
      icon: Slovenia,
      name: "Slovenia",
    },
    {
      icon: SouthKorea,
      name: "South Korea",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  Countries.sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(
          "http://apiip.net/api/check?accessKey=5576a302-6489-4661-8958-67430c4fccee"
        );
        const data = await response.json();

        const userCountry = data.countryName || "Unknown";

        const matchingCountry = Countries.find(
          (country) => country.name === userCountry
        );

        if (matchingCountry) {
          setCountry(matchingCountry);
        } else {
          setCountry(null);
        }
      } catch (error) {
        console.error("Error fetching country:", error.message);
      }
    };

    fetchCountry();
  }, []);

  useEffect(() => {
    // Filter countries based on the search text
    const filteredCountries = Countries.filter((country) =>
      country.name.toLowerCase().startsWith(search.toLowerCase())
    );
    setSearchList(filteredCountries);
  }, [search]);

  return (
    <>
      {country && (
        <div
          className="rounded-5 d-inline-flex p-2 border"
          style={{ backgroundColor: "#FFF", gap: "10px" }}
        >
          <img src={country.icon} alt="country icon" />
          <p className="formtext">{country.name}</p>
        </div>
      )}
      <input
        value={search}
        placeholder="Search Location"
        onChange={(e) => setSearch(e.target.value)}
        className="forminput col-md-12 col-12 mt-2"
      />
      {search && (
        <div
          className="countrylist scrollbaredit"
          style={{ maxHeight: "30vh", overflow: "auto" }}
        >
          {searchList.length !== 0
            ? searchList.map((sea, i) => (
                <div
                  className="d-flex  mb-3"
                  key={i}
                  onClick={() => {
                    setCountry(sea);
                    setSearch("");
                  }}
                >
                  <img src={sea.icon} alt="country icon" />
                  <p> {sea.name}</p>
                </div>
              ))
            : "None"}
        </div>
      )}
    </>
  );
};
export default Location;
