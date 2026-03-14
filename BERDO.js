var config = {
    // style: 'mapbox://styles/mapbox/streets-v12',
    // leave commented to use Mapbox Standard Style
    accessToken: 'pk.eyJ1IjoiaGJvdG5pY2siLCJhIjoiY21tbnJyaXJhMDYyZjJyb2tnczVsOTM4dSJ9.W9qfSgTiWPBOlcxAQcClhg',
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
    subtitle: 'Scroll to see different hospitals throughout Boston, and how their energy usage compares to others.',
    footer: 'Visualization by Hayes Botnick. Data by the City of Boston.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Brigham and Womens Medical Center',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 1',
            location: {
                center: [-71.12861, 42.30239],
                zoom: 17.65,
                pitch: 85,
                bearing: 169.57
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
            id: 'second-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Boston Medical Center',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 8',
            location: {
                center: [-71.07388, 42.33387],
                zoom: 17.20,
                pitch: 85,
                bearing: 103.14
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
            id: 'third-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Beth Israel Deaconess Medical Center',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 9',
            location: {
                center: [-71.10596, 42.34004],
                zoom: 18.13,
                pitch: 84,
                bearing: 122.36
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
            title: 'Massachusetts General Hospital',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 11',
            location: {
                center: [-71.06952, 42.36366],
                zoom: 17.33,
                pitch: 79.5,
                bearing: 131.01
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
            title: 'Shriners Hospital for Children',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 47',
            location: {
                center: [-71.06636, 42.36296],
                zoom: 17.92,
                pitch: 85,
                bearing: -151.31
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
            title: 'Boston Childrens Hospital',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 57',
            location: {
                center: [-71.10528, 42.33667],
                zoom: 17.55,
                pitch: 85,
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
            id: 'seventh-chapter',
            alignment: 'left',
            hidden: false,
            title: 'New England Baptist Hospital',
           // image: './assets/san-fran.jpeg',//
            description: 'Score: 63',
            location: {
                center: [-71.10774, 42.32974],
                zoom: 18.05,
                pitch: 85,
                bearing: 41.86
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
            id: 'eigth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Franciscian Childrens Hospital',
            //image: './assets/san-fran.jpeg',//
            description: 'Score: 100',
            location: {
                center: [-71.14387, 42.35015],
                zoom: 17.55,
                pitch: 85,
                bearing: -165.65
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
    ]}
        
    
