{
	"targets":[
	{
		"target_name": "quicklzo",
		"sources": ["src/lzo.cc", "src/minilzo206/minilzo.c"
			],

		'cflags!': [ '-fno-exceptions' ],
      		'cflags_cc!': [ '-fno-exceptions' ],
      		'conditions': [
        			['OS=="mac"', {
          				'xcode_settings': {
            				'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
          				}
        				}
				]
				]
	}
	]
}
