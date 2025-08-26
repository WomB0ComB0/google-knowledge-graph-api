import { KnowledgeGraphResults } from "@/components/knowledge-graph-results"

const knowledgeGraphData = {
    "@context": {
        "goog": "http://schema.googleapis.com/",
        "@vocab": "http://schema.org/",
        "detailedDescription": "goog:detailedDescription",
        "resultScore": "goog:resultScore",
        "EntitySearchResult": "goog:EntitySearchResult",
        "kg": "http://g.co/kg"
    },
    "@type": "ItemList",
    "itemListElement": [
        {
            "result": {
                "url": "http://www.ledzeppelin.com/",
                "description": "Rock band",
                "name": "Led Zeppelin",
                "@id": "kg:/m/04k05",
                "@type": [
                    "MusicGroup",
                    "Thing"
                ],
                "detailedDescription": {
                    "articleBody": "Led Zeppelin were an English rock band formed in London in 1968. The band comprised vocalist Robert Plant, guitarist Jimmy Page, bassist-keyboardist John Paul Jones and drummer John Bonham. ",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin"
                },
                "image": {
                    "contentUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUECL-eA182xpkcQUAlMGTNQvWeFkNlsVbzZFM9TCDKFoZFMZ1",
                    "url": "https://commons.wikimedia.org/wiki/File:Led_Zeppelin_logo.svg"
                }
            },
            "@type": "EntitySearchResult",
            "resultScore": 12299.98828125
        },
        {
            "@type": "EntitySearchResult",
            "resultScore": 1944.657958984375,
            "result": {
                "description": "2025 film",
                "name": "Becoming Led Zeppelin",
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/Becoming_Led_Zeppelin",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "Becoming Led Zeppelin is a 2025 documentary film directed by Bernard MacMahon which charts the formation and early years of Led Zeppelin. "
                },
                "@type": [
                    "Thing",
                    "Movie"
                ],
                "@id": "kg:/g/11rxvl73pt"
            }
        },
        {
            "resultScore": 1082.235595703125,
            "result": {
                "@id": "kg:/m/0d9bm",
                "name": "Led Zeppelin IV",
                "@type": [
                    "Thing",
                    "MusicAlbum"
                ],
                "description": "Studio album by Led Zeppelin",
                "detailedDescription": {
                    "articleBody": "The untitled fourth studio album by the English rock band Led Zeppelin, commonly known as Led Zeppelin IV, was released on 8 November 1971, by Atlantic Records. ",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_IV",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "image": {
                    "url": "https://commons.wikimedia.org/wiki/File:Salisbury_Tower,_Ladywood,_Birmingham_geograph-5626005-by-Roger--Kidd_(cropped).jpg",
                    "contentUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTldzwdDgHPvFYCjA1u2Ditl0qYFiEAGIgVG_a-Rpz_ES6LYWfP"
                }
            },
            "@type": "EntitySearchResult"
        },
        {
            "resultScore": 1003.950439453125,
            "result": {
                "description": "Studio album by Led Zeppelin",
                "@id": "kg:/m/0c4zm",
                "name": "Led Zeppelin",
                "@type": [
                    "MusicAlbum",
                    "Thing"
                ],
                "detailedDescription": {
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_(album)",
                    "articleBody": "Led Zeppelin is the debut studio album by the English rock band Led Zeppelin. It was released on 13 January 1969 in the United States and on 31 March 1969 in the United Kingdom by Atlantic Records.\n"
                },
                "url": "http://discography.ledzeppelin.com/disc_lz1.html"
            },
            "@type": "EntitySearchResult"
        },
        {
            "resultScore": 934.88690185546875,
            "@type": "EntitySearchResult",
            "result": {
                "@id": "kg:/m/0dbmz",
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/The_Song_Remains_the_Same_(film)",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "The Song Remains the Same is a 1976 concert film featuring the English rock band Led Zeppelin. The filming took place during the summer of 1973, during three nights of concerts at Madison Square Garden in New York City, with additional footage shot at Shepperton Studios in Surrey. "
                },
                "description": "1976 film",
                "@type": [
                    "Thing",
                    "Movie"
                ],
                "name": "The Song Remains the Same"
            }
        },
        {
            "@type": "EntitySearchResult",
            "resultScore": 827.48687744140625,
            "result": {
                "name": "Led Zeppelin II",
                "@type": [
                    "Thing",
                    "MusicAlbum"
                ],
                "detailedDescription": {
                    "articleBody": "Led Zeppelin II is the second studio album by the English rock band Led Zeppelin, released on 22 October 1969 in the United States and on 31 October 1969 in the United Kingdom by Atlantic Records. ",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_II"
                },
                "description": "Studio album by Led Zeppelin",
                "@id": "kg:/m/0d993"
            }
        },
        {
            "result": {
                "@id": "kg:/m/0d9b3",
                "detailedDescription": {
                    "articleBody": "Led Zeppelin III is the third studio album by the English rock band Led Zeppelin, released on 5 October 1970. It was recorded in three locations. Much of the work was done at Headley Grange, a country house, using the Rolling Stones Mobile Studio. Additional sessions were held at Island Studios and Olympic Studios in London. ",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_III",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "@type": [
                    "MusicAlbum",
                    "Thing"
                ],
                "description": "Studio album by Led Zeppelin",
                "name": "Led Zeppelin III"
            },
            "resultScore": 715.6231689453125,
            "@type": "EntitySearchResult"
        },
        {
            "result": {
                "name": "Led Zeppelin DVD",
                "detailedDescription": {
                    "articleBody": "Led Zeppelin DVD/VHS is a double DVD set by the English rock band Led Zeppelin, released in the United Kingdom on 26 May 2003, and the United States on 27 May 2003. It contains live concert footage of the band spanning the years 1969 to 1979. ",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_DVD",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "@type": [
                    "Thing",
                    "Movie"
                ],
                "description": "2003 film",
                "@id": "kg:/m/01vh8h"
            },
            "resultScore": 593.54888916015625,
            "@type": "EntitySearchResult"
        },
        {
            "result": {
                "@type": [
                    "Thing",
                    "Movie"
                ],
                "@id": "kg:/m/0m0ks5y",
                "name": "Celebration Day",
                "description": "2012 film",
                "detailedDescription": {
                    "articleBody": "Celebration Day is a concert film and live album by the English rock band Led Zeppelin, recorded at the Ahmet Ertegun Tribute Concert on 10 December 2007, in The O₂ Arena, London. ",
                    "url": "https://en.wikipedia.org/wiki/Celebration_Day_(film)",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                }
            },
            "resultScore": 552.09783935546875,
            "@type": "EntitySearchResult"
        },
        {
            "resultScore": 412.31903076171881,
            "result": {
                "@type": [
                    "Thing",
                    "MusicGroup"
                ],
                "name": "The New Yardbirds",
                "description": "Band",
                "@id": "kg:/g/120lwj7k"
            },
            "@type": "EntitySearchResult"
        },
        {
            "resultScore": 334.80465698242188,
            "result": {
                "@type": [
                    "MusicAlbum",
                    "Thing"
                ],
                "@id": "kg:/m/0dbp4",
                "name": "Led Zeppelin Remasters",
                "description": "Compilation album by Led Zeppelin",
                "detailedDescription": {
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "Led Zeppelin Remasters is a three-LP compilation album of digitally remastered material by English rock band Led Zeppelin. Containing songs from the band's eight studio albums, it was initially released in the UK and Japan by Atlantic Records on 15 October 1990. ",
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_Remasters"
                }
            },
            "@type": "EntitySearchResult"
        },
        {
            "result": {
                "name": "Kashmir",
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/Kashmir_(Danish_band)",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "Kashmir is a Danish alternative rock band consisting of Kasper Eistrup; Mads Tunebjerg; Asger Techau and Henrik Lindstrand."
                },
                "image": {
                    "url": "https://en.wikipedia.org/wiki/Kashmir_(Danish_band)",
                    "contentUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1lpGRim077ftJyl56kBfuNOoo3MwMkssaV1OxOdbPsi2e7YpD"
                },
                "@id": "kg:/m/061_q3",
                "url": "https://www.sonymusic.de/kuenstler/kashmir",
                "description": "Rock band",
                "@type": [
                    "Thing",
                    "MusicGroup"
                ]
            },
            "@type": "EntitySearchResult",
            "resultScore": 285.18374633789062
        },
        {
            "resultScore": 253.9305725097656,
            "result": {
                "name": "BBC Sessions",
                "@id": "kg:/m/0dbpj",
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/BBC_Sessions_(Led_Zeppelin_album)",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "BBC Sessions is a compilation album featuring studio sessions and a live concert recorded by English rock group Led Zeppelin for the BBC. It was released on 17 November 1997, by Atlantic Records. Disc one consists of material from four different 1969 BBC sessions. Disc two contains most of the 1 April 1971 concert from the Paris Theatre in London. "
                },
                "description": "Compilation album by Led Zeppelin",
                "@type": [
                    "Thing",
                    "MusicAlbum"
                ]
            },
            "@type": "EntitySearchResult"
        },
        {
            "resultScore": 120.64149475097661,
            "result": {
                "@type": [
                    "MusicAlbum",
                    "Thing"
                ],
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/Led_Zeppelin_Boxed_Set_2",
                    "articleBody": "Led Zeppelin Boxed Set 2 is a double album released by Atlantic Records on 20 September 1993. This box set features the rest of the English rock band Led Zeppelin's catalogue not included in the 1990 4-CD box set Led Zeppelin, all digitally remastered, including the previously unreleased studio track \"Baby Come On Home\". ",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "@id": "kg:/m/01kly6",
                "description": "Album by Led Zeppelin",
                "name": "Led Zeppelin Boxed Set 2"
            },
            "@type": "EntitySearchResult"
        },
        {
            "result": {
                "name": "Kashmir",
                "@id": "kg:/m/048bf_",
                "@type": [
                    "MusicComposition",
                    "Thing"
                ],
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/Kashmir_(song)",
                    "articleBody": "\"Kashmir\" is a song by the English rock band Led Zeppelin. Featured on their sixth studio album Physical Graffiti, it was written by Jimmy Page and Robert Plant with contributions from John Bonham over a period of three years with lyrics dating to 1973. ",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "description": "Song"
            },
            "@type": "EntitySearchResult",
            "resultScore": 118.8141784667969
        },
        {
            "resultScore": 97.5482406616211,
            "@type": "EntitySearchResult",
            "result": {
                "@id": "kg:/m/03j3kw1",
                "@type": [
                    "MusicGroup",
                    "Thing"
                ],
                "url": "http://www.lezzeppelin.com/",
                "name": "Lez Zeppelin",
                "detailedDescription": {
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "url": "https://en.wikipedia.org/wiki/Lez_Zeppelin",
                    "articleBody": "Lez Zeppelin is an all-female tribute act, performing the work of Led Zeppelin."
                },
                "description": "Band"
            }
        },
        {
            "resultScore": 60.311073303222663,
            "@type": "EntitySearchResult",
            "result": {
                "@type": [
                    "Thing",
                    "MusicGroup"
                ],
                "detailedDescription": {
                    "url": "https://en.wikipedia.org/wiki/Jason_Bonham's_Led_Zeppelin_Evening",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "articleBody": "Jason Bonham's Led Zeppelin Evening, originally known as Jason Bonham's Led Zeppelin Experience, are a Led Zeppelin tribute band led by Jason Bonham, the son of late drummer John Bonham."
                },
                "name": "Jason Bonham's Led Zeppelin Evening",
                "@id": "kg:/g/11y48x5w8j",
                "image": {
                    "url": "https://en.wikipedia.org/wiki/Jason_Bonham's_Led_Zeppelin_Evening",
                    "contentUrl": "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT6XdUFydZz8kWQcndx_Vv-Kiz-xg-n2RrWFw5Ugj-yfbfs2KzK"
                },
                "description": "Band"
            }
        },
        {
            "resultScore": 54.695053100585938,
            "result": {
                "description": "Studio album by Led Zeppelin",
                "@id": "kg:/m/0d9c3",
                "@type": [
                    "MusicAlbum",
                    "Thing"
                ],
                "detailedDescription": {
                    "articleBody": "Houses of the Holy is the fifth studio album by the English rock band Led Zeppelin, released on 28 March 1973 in the United States and on 30 March 1973 in the United Kingdom by Atlantic Records. ",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License",
                    "url": "https://en.wikipedia.org/wiki/Houses_of_the_Holy"
                },
                "name": "Houses of the Holy"
            },
            "@type": "EntitySearchResult"
        },
        {
            "result": {
                "detailedDescription": {
                    "articleBody": "\"Over the Hills and Far Away\" is the third track from English rock band Led Zeppelin's 1973 album Houses of the Holy. In the US, it was released as a single, with \"Dancing Days\" as the B-side.",
                    "url": "https://en.wikipedia.org/wiki/Over_the_Hills_and_Far_Away_(Led_Zeppelin_song)",
                    "license": "https://en.wikipedia.org/wiki/Wikipedia:Text_of_Creative_Commons_Attribution-ShareAlike_3.0_Unported_License"
                },
                "description": "Song by Jimmy Page and Robert Plant",
                "name": "Over the Hills and Far Away",
                "@type": [
                    "Thing",
                    "MusicComposition"
                ],
                "@id": "kg:/m/09vvdd"
            },
            "@type": "EntitySearchResult",
            "resultScore": 47.044143676757812
        },
        {
            "resultScore": 42.207088470458977,
            "@type": "EntitySearchResult",
            "result": {
                "name": "Early Days: The Best of Led Zeppelin, Volume One",
                "description": "Compilation album by Led Zeppelin",
                "@id": "kg:/m/01klwr",
                "@type": [
                    "Thing",
                    "MusicAlbum"
                ]
            }
        }
    ]
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Knowledge Graph Search Results</h1>
          <p className="text-muted-foreground">
            Dynamic UI for displaying Google Knowledge Graph API responses with support for any entity type
          </p>
          <div className="mt-4 p-4 bg-muted/50 rounded-lg">
            <p className="text-sm text-muted-foreground">
              <strong>API Structure:</strong> This UI now supports the official Google Knowledge Graph Search API format
              with JSON-LD structure, dynamic entity types, and comprehensive schema.org compatibility.
            </p>
          </div>
        </div>
        <KnowledgeGraphResults data={knowledgeGraphData} />
      </div>
    </div>
  )
}
