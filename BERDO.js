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
    title: 'Your Title Goes Here',
    subtitle: 'The Storytelling Template helps you create an awesome animated map story with ease.',
    byline: 'By a I.M. Amapper',
    footer: 'Source: source citations, etc. <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a> template.',
    chapters: [
        {
            id: 'first-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Brigham and Womens Medical Center',
            image: './assets/san-fran.jpeg',
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
            alignment: 'left',
            hidden: false,
            title: 'Boston Medical Center',
            image: './assets/san-fran.jpeg',
            description: 'Score: 8',
            location: {
                center: [-71.07343, 42.33577],
                zoom: 16.94,
                pitch: 85,
                bearing: 42.98
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
            image: './assets/san-fran.jpeg',
            description: 'Score: 9',
            location: {
                center: [-71.10596, 42.34004],
                zoom: 17.13,
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
            alignment: 'left',
            hidden: false,
            title: 'Massachusetts General Hospital',
            image: './assets/san-fran.jpeg',
            description: 'Score: 11',
            location: {
                center: [-71.06952, 42.36366],
                zoom: 18.33,
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
            image: './assets/san-fran.jpeg',
            description: 'Score: 47',
            location: {
                center: [-71.06636, 42.36296],
                zoom: 18.92,
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
            image: './assets/san-fran.jpeg',
            description: 'Score: 57',
            location: {
                center: [-71.10528, 42.33667],
                zoom: 16.55,
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
    ]}
        
    
