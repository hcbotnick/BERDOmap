var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGJvdG5pY2siLCJhIjoiY21uMmlocGUyMTNvbTJxcHhvNWNqaWJyaSJ9.0DJO74tWcRgyHQq3G3i0aw',
    style: 'mapbox://styles/hbotnick/cmmofidyp004r01s19oyacgxp',
    showMarkers: true,
    
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    
    insetOptions: {
        markerColor: 'orange'
    },
    insetPosition: 'bottom-right',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Where do Boston Hospitals Score?',
    footer: 'Visualization by Hayes Botnick. Data by the City of Boston.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Most buildings in Boston — 79.5% of the properties in the BERDO dataset — fall into two categories:',
           // image: './Houses.png',
            description: 'These buildings tend to perform relatively well in the city’s energy data, with an average Energy Star score of  71.',
            location: {
                center: [-71.07148, 42.34628],
                zoom: 9.5,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title:  'Hospitals tell a different story.',
            //image: './hospitalgraphic.png',
            description:  'In Boston’s building emissions data, hospitals average an Energy Star score of 54, well below many other building types in the city. Several medical facilities rank far lower.',
            location: {
                center: [-71.06858, 42.34425],
                zoom: 15,
                pitch: 60.5,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Brigham and Womens Medical Center',
            description: 'This Hospital had the lowest possible score of 1. A spokesperson could not be reached for comment.',
            location: {
                center: [-71.12861, 42.30150],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'fourth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Boston Medical Center also appears near the bottom of the rankings, with a score of 8.',
            description: 'The hospital owns several properties included in the dataset, including the one complex and the <span style="color: #e51f1f;">Moakley Building</span> in the South End, both of which received Energy Star scores of <span style="color: #e51f1f;">8</span> making them among the lowest-performing medical facilities in the city. The hospital declined to comment on questions about the buildings’ energy performance, their low Energy Star scores, or any plans to meet regulations. <br><span style="font-size: 10px;">*Some buildings within the property did not report their scores, so they did not receive color values.</span>',
            location: {
                center: [-71.07380, 42.33434],
                zoom: 16.4,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'fifth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Boston Childrens Hospital had a score of 18.',
            description: '<b>“Being a hospital, we have so much going on that just happens to be fairly energy-intensive compared with almost any other type of building,”</b>said Brian Smith, Senior Manager of Energy, Building Systems, and Sustainability.',
            location: {
                center: [-71.10600, 42.33700],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        {
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Not all hospitals in Boston fall at the bottom of the rankings.',
            description: 'Some smaller or less energy-intensive facilities perform significantly better. <b>Franciscan Children’s Hospital,</b> located in Brighton, received an Energy Star score of 100 out of 100, placing it among the highest-performing healthcare buildings in the dataset.',
            location: {
                center: [-71.14387, 42.35015],
                zoom: 18,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'layer-name',
                opacity: .5
                }
            ],
            onChapterExit: [
                {
                layer: 'layer-name',
                opacity: 1,
                duration: 5000
                }
            ]
        },
        // {
        //     id: 'fifth-chapter',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Beth Israel Deaconess Medical Center',
        //     //image: './assets/san-fran.jpeg',//
        //     description: 'Score: 9',
        //     location: {
        //         center: [-71.10596, 42.34004],
        //         zoom: 18.13,
        //         pitch: 84,
        //         bearing: 122.36
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //         layer: 'layer-name',
        //         opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //         layer: 'layer-name',
        //         opacity: 1,
        //         duration: 5000
        //         }
        //     ]
        // },
        // {
        //     id: 'fifth-chapter',
        //     alignment: 'right',
        //     hidden: false,
        //     title: 'Massachusetts General Hospital',
        //     //image: './assets/san-fran.jpeg',//
        //     description: 'Score: 11',
        //     location: {
        //         center: [-71.06952, 42.36366],
        //         zoom: 17.33,
        //         pitch: 79.5,
        //         bearing: 131.01
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //         layer: 'layer-name',
        //         opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //         layer: 'layer-name',
        //         opacity: 1,
        //         duration: 5000
        //         }
        //     ]
        // },
        //  {
        //     id: 'sixth-chapter',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'Shriners Hospital for Children',
        //     //image: './assets/san-fran.jpeg',//
        //     description: 'Score: 47',
        //     location: {
        //         center: [-71.06636, 42.36296],
        //         zoom: 17.92,
        //         pitch: 85,
        //         bearing: -151.31
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //         layer: 'layer-name',
        //         opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //         layer: 'layer-name',
        //         opacity: 1,
        //         duration: 5000
        //         }
        //     ]
        // },
        // {
        //     id: 'eighth-chapter',
        //     alignment: 'left',
        //     hidden: false,
        //     title: 'New England Baptist Hospital',
        //    // image: './assets/san-fran.jpeg',//
        //     description: 'Score: 63',
        //     location: {
        //         center: [-71.10774, 42.32974],
        //         zoom: 18.05,
        //         pitch: 85,
        //         bearing: 41.86
        //     },
        //     mapAnimation: 'flyTo',
        //     rotateAnimation: false,
        //     callback: '',
        //     onChapterEnter: [
        //         {
        //         layer: 'layer-name',
        //         opacity: .5
        //         }
        //     ],
        //     onChapterExit: [
        //         {
        //         layer: 'layer-name',
        //         opacity: 1,
        //         duration: 5000
        //         }
        //     ]
        // },
    ]}
        
    
