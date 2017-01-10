export const configSg: any = {
  BubbleChart: {
    data: {
      reader: 'ddf1-csv-ext',
      splash: true
    },
    locale: {
      id: 'en',
      filePath: './preview-data/translation/'
    },
    state: {
      entities: {
        dim: 'geo',
        show: {
          'is--country': true
        }
      },
      entities_colorlegend: {
        opacityRegular: 0.8,
        opacityHighlightDim: 0.3,
        dim: 'world_4region'
      },
      entities_tags: {
        dim: 'tag'
      },
      time: {
        dim: 'time'
      },
      marker: {
        space: ['entities', 'time'],
        label: {
          use: 'property',
          which: 'name'
        },
        axis_y: {
          use: 'indicator',
          which: 'life_expectancy_years',
          zoomedMin: 19,
          zoomedMax: 86,
          domainMin: 0,
          domainMax: 100
        },
        axis_x: {
          use: 'indicator',
          scaleType: 'log',
          domainMax: 150000,
          domainMin: 300,
          zoomedMax: 150000,
          zoomedMin: 300,
          which: 'income_per_person_gdppercapita_ppp_inflation_adjusted'
        },
        size: {
          use: 'indicator',
          which: 'population_total',
          domainMin: 15,
          domainMax: 1400000000,
          scaleType: 'linear',
          allow: {
            scales: ['linear']
          }
        },
        color: {
          use: 'property',
          which: 'world_4region',
          syncModels: ['marker_colorlegend']
        }
      },
      marker_colorlegend:{
        space: ['entities_colorlegend'],
        label: {
          use: 'property',
          which: 'name'
        },
        hook_rank: {
          use: 'property',
          which: 'rank'
        },
        hook_geoshape: {
          use: 'property',
          which: 'shape_lores_svg'
        }
      },
      marker_tags: {
        space: ['entities_tags'],
        label: {
          use: 'property',
          which: 'name'
        },
        hook_parent: {
          use: 'property',
          which: 'parent'
        }
      }
    },
    ui: {
      datawarning: {
        doubtDomain: [1800, 1950, 2015],
        doubtRange: [1.0, 0.3, 0.2]
      },
      buttons: ['colors','find','size','trails','lock','moreoptions','fullscreen','presentation'],
      dialogs: {
        popup: ['colors','find','size','zoom','moreoptions'],
        sidebar: ['colors','find','size','zoom'],
        moreoptions: ['opacity','speed','axes','size','colors','label','zoom','presentation','about']
      }
    }
  },
  MountainChart: {
    data: {
      reader: 'ddf1-csv-ext',
      splash: true
    },
    locale: {
      id: 'en',
      filePath: './preview-data/translation/'
    },
    state: {
      time: {
        startOrigin: "1800",
        endOrigin: "2015",
        value: "2015"
      },
      entities: {
        dim: "geo",
        show: {
          "is--country": true
        }
      },
      entities_allpossible: {
        dim: "geo",
        show: {
          "is--country": true
        }
      },
      entities_colorlegend: {
        dim: "geo",
        show: {
          "is--world_4region": true
        }
      },
      entities_tags: {
        dim: "tag"
      },
      marker_allpossible: {
        space: [
          "entities_allpossible"
        ],
        label: {
          use: "property",
          which: "name"
        }
      },
      marker: {
        space: [
          "entities",
          "time"
        ],
        label: {
          use: "property",
          which: "name"
        },
        axis_y: {
          use: "indicator",
          which: "life_expectancy_years",
          scaleType: "linear"
        },
        axis_x: {
          use: "indicator",
          which: "income_per_person_gdppercapita_ppp_inflation_adjusted",
          scaleType: "log",
          domainMin: 0.11,
          domainMax: 500,
          tailFatX: 1.85,
          tailCutX: 0.2,
          tailFade: 0.7,
          xScaleFactor: 1.039781626,
          xScaleShift: -1.127066411
        },
        axis_s: {
          use: "indicator",
          which: "population_total",
          scaleType: "linear"
        },
        color: {
          use: "property",
          which: "world_4region",
          scaleType: "ordinal",
          syncModels: [
            "marker_colorlegend",
            "stack",
            "group"
          ]
        },
        stack: {
          use: "constant",
          which: "all"
        },
        group: {
          use: "property",
          which: "world_4region",
          merge: false
        }
      },
      marker_colorlegend: {
        space: [
          "entities_colorlegend"
        ],
        type: "geometry",
        shape: "svg",
        label: {
          use: "property",
          which: "name"
        },
        hook_rank: {
          use: "property",
          which: "rank"
        },
        hook_geoshape: {
          use: "property",
          which: "shape_lores_svg"
        }
      },
      marker_tags: {
        space: [
          "entities_tags"
        ],
        label: {
          use: "property",
          which: "name"
        },
        hook_parent: {
          use: "property",
          which: "parent"
        }
      }
    },
    ui: {
      datawarning: {
        doubtDomain: [1800, 1950, 2015],
        doubtRange: [1.0, 0.8, 0.6]
      },
      buttons: ['colors','find','size','trails','lock','moreoptions','fullscreen','presentation'],
      dialogs: {
        popup: ['colors','find','size','zoom','moreoptions'],
        sidebar: ['colors','find','size','zoom'],
        moreoptions: ['opacity','speed','axes','size','colors','label','zoom','presentation','about']
      }
    }
  },
  BubbleMap: {
    data: {
      reader: 'ddf1-csv-ext',
      splash: true
    },
    locale: {
      id: 'en',
      filePath: './preview-data/translation/'
    },
    state: {
      time: {
        startOrigin: "1800",
        endOrigin: "2015",
        value: "2015"
      },
      entities: {
        dim: "geo",
        show: {
          "is--country": true
        }
      },
      entities_colorlegend: {
        dim: "geo",
        show: {
          "is--world_4region": true
        }
      },
      entities_tags: {
        dim: "tag"
      },
      marker: {
        space: [
          "entities",
          "time"
        ],
        label: {
          use: "property",
          which: "name"
        },
        size: {
          use: "indicator",
          which: "population_total",
          scaleType: "linear",
          domainMin: 15,
          domainMax: 1400000000,
          allow: {
            scales: [
              "linear"
            ]
          }
        },
        hook_lat: {
          use: "property",
          which: "latitude",
          "_important": true
        },
        hook_lng: {
          use: "property",
          which: "longitude",
          "_important": true
        },
        color: {
          use: "property",
          which: "world_4region",
          scaleType: "ordinal",
          syncModels: [
            "marker_colorlegend"
          ]
        }
      },
      marker_colorlegend: {
        space: [
          "entities_colorlegend"
        ],
        type: "geometry",
        shape: "svg",
        label: {
          use: "property",
          which: "name"
        },
        hook_rank: {
          use: "property",
          which: "rank"
        },
        hook_geoshape: {
          use: "property",
          which: "shape_lores_svg"
        }
      },
      marker_tags: {
        space: [
          "entities_tags"
        ],
        label: {
          use: "property",
          which: "name"
        },
        hook_parent: {
          use: "property",
          which: "parent"
        }
      }
    },
    ui: {
      datawarning: {
        doubtDomain: [1800, 1950, 2015],
        doubtRange: [1.0, 0.3, 0.2]
      },
      buttons: ['colors','find','size','trails','lock','moreoptions','fullscreen','presentation'],
      dialogs: {
        popup: ['colors','find','size','zoom','moreoptions'],
        sidebar: ['colors','find','size','zoom'],
        moreoptions: ['opacity','speed','axes','size','colors','label','zoom','presentation','about']
      }
    }
  }
};