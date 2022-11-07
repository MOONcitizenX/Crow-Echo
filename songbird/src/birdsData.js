const birdsData = [
	[
		{
			id: 1,
			name: 'Ворон',
			name_en: 'Crow',
			duration: '00:12',
			species: 'Corvus corax',
			description: 'Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.',
			description_en: 'The raven is a large bird. Their body length reaches 70 centimeters, and their wingspan is up to one and a half meters. Ravens inhabit the vicinity of the Tower. There is a belief in England that on the day when black crows fly away from the Tower, the monarchy will collapse.',
			image: 'https://live.staticflickr.com//65535//49298804222_474cfe8682.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/XIQVMQVUPP/XC518684-Grands%20corbeaux%2009012020%20Suzon.mp3'
		},
		{
			id: 2,
			name: 'Журавль',
			name_en: 'Crane',
			duration: '00:40',
			species: 'Grus grus',
			description: 'Звуки, издаваемые журавлем, похожи на звонкое «кур-лы – кур-лы». Журавли чаще всего поют дуэтом – одна птица начинает запев со слога «кур», а вторая подхватывает «лы». Если птица поёт одна, то она издает только звук «кур».',
			description_en: 'The sounds the crane makes are similar to the resounding "kur-ly - kur-ly. Cranes most often sing a duet - one bird starts the chorus with the syllable "kur" and the other picks up the "li". If the bird sings alone, it makes only the "kur" sound.',
			image: 'https://live.staticflickr.com/65535/49221158846_b0b69a58f1.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC512582-190604_1087_Grus_tok.mp3'
		},
		{
			id: 3,
			name: 'Ласточка',
			name_en: 'Swallow',
			duration: '00:46',
			species: 'Delichon urbicum',
			description: 'Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.',
			description_en: 'Swallows are characterized by soft chirping. The songs of swallows do not cease throughout the summer. Researchers distinguish up to six chirping sounds in birds: "vith", "vith-vith", "chivit", "chirivit", etc. Swallows like to sing a duet.',
			image: 'https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3'
		},
		{
			id: 4,
			name: 'Козодой',
			name_en: 'nightjar',
			duration: '02:03',
			species: 'Caprimulgus europaeus',
			description: 'Козодой – неприметная птица, известная благодаря своему голосу. Песня козодоя звучит как монотонная трель похожая на тарахтение мотоцикла. Такое дребезжание слышно от заката до рассвета, его тональность, частота и громкость изменяются.',
			description_en: 'The nightjar is an inconspicuous bird known for its voice. The song of the nightjar sounds like a monotonous trill similar to the rattle of a motorcycle. This rattling can be heard from dusk to dawn, its tonality, frequency and volume varying.',
			image: 'https://live.staticflickr.com/65535/48456345286_dbc8530027.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC486956-190623_22.37h_nachtzwaluw_rechte%20heide_zang_ad%20_2ex_gezien_.mp3'
		},
		{
			id: 5,
			name: 'Кукушка',
			name_en: 'Cuckoo',
			duration: '00:32',
			species: 'Cuculus canorus',
			description: 'Кукушку назвали так из-за особенностей ее песен. Звонкое «ку-ку» не спутать ни с какой другой птицей. Кукушки не строят гнезда, их потомство выращивают другие виды пернатых, которым кукушки подбрасывают свои яйца.',
			description_en: 'The cuckoo is so named because of the peculiarities of its songs. The sonorous "cuckoo" cannot be confused with any other bird. Cuckoos do not build nests, their offspring are raised by other species of birds, to which cuckoos drop their eggs.',
			image: 'https://live.staticflickr.com/65535/48377838151_e15f430ec1.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501461-190616_08.13h_koekoek_brabantse%20biesbosch%20jantjesplaat_roep_1%20ex_ad%20m_ter%20plaatse%20zingend_gezien_.mp3'
		},
		{
			id: 6,
			name: 'Синица',
			name_en: 'Tits',
			duration: '01:35',
			species: 'Parus major',
			description: 'В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.',
			description_en: 'More than 40 different sound combinations can be distinguished in the chirping of tits. They sing practically the whole year round, only quieting down a bit in winter. Tits are real forest sanitarians. One pair of tits protects dozens of trees from pests during the nesting period.',
			image: 'https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Воробей',
			name_en: 'Sparrow',
			duration: '00:30',
			species: 'Passer domesticus',
			description: 'Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.',
			description_en: 'Sparrows are the most famous and recognizable birds. They are easily recognized by their colorful plumage and cheerful chirping. Sparrows are a synatropic species - they settle close to human habitation.',
			image: 'https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3'
		},
		{
			id: 2,
			name: 'Грач',
			name_en: 'Rook',
			duration: '00:13',
			species: 'Corvus frugilegus',
			description: 'Грачи очень умные и сообразительные птицы. С помощью клюва они создают и используют простейшие орудия. У грачей развит рефлекс на звуки трактора. Услышав «тарахтение», они летят на звук – трактор пашет землю, значит, в этом месте много корма.',
			description_en: 'Rooks are very smart and intelligent birds. They use their beak to create and use simple tools. Rooks have a reflex to the sounds of a tractor. When they hear a "clatter", they fly to the sound - the tractor is plowing the ground, which means there is a lot of food in the area.',
			image: 'https://live.staticflickr.com//65535//49347123322_291c86b016.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/RLRHCUIPIY/XC512540-gawron%20Suble%2019.12.19%20%2012.35.mp3'
		},
		{
			id: 3,
			name: 'Галка',
			name_en: 'Jackdaw',
			duration: '00:27',
			species: 'Coloeus monedula',
			description: 'Слово «галка» произошло из старославянского языка и переводится как «чёрный». Этим словом часто называют воронов или других черных птиц. Латинское название галки «monedula» связывают со словами монета за любовь птицы к блестящим и ярким вещам.',
			description_en: 'The word "галка" comes from the Old Slavic language and is translated as "black". Ravens or other black birds are often called with this word. The Latin name of an jackdaw "monedula" is associated with the word coin for the bird\'s love of shiny and bright things.',
			image: 'https://live.staticflickr.com//65535//49237149586_993cf685c5.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC510498-Coloeus%20monedula_2019.11.13_11.55_01.mp3'
		},
		{
			id: 4,
			name: 'Певчий дрозд',
			name_en: 'Song thrush',
			duration: '03:46',
			species: 'Turdus philomelos',
			description: 'Дрозд — лучший певец из отряда воробьиных. Песня состоит только из красивых звучных свистов и коротких трелей. Чаще всего её можно услышать в утреннее и вечернее время. Поют дрозды в течении всего периода гнездования.',
			description_en: 'The thrush is the best singer of the passerine family. The song consists only of beautiful sonorous whistles and short trills. Most often it can be heard in the morning and evening hours. Thrushes sing during the entire nesting period.',
			image: 'https://live.staticflickr.com/65535/48979125763_e2534f54bd.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513326-190704_1146_TF-Glogow.mp3'
		},
		{
			id: 5,
			name: 'Сорока',
			name_en: 'Magpie',
			duration: '00:10',
			species: 'Pica pica',
			description: 'Сорока очень трудолюбивая птица. Она строит до восьми гнёзд, а потом выбирает из них самое лучшее. Вход в гнездо сорок всегда обращен на юг, чтобы в жилище было теплее. Сороки являются единственными птицами, которые узнают себя в зеркале.',
			description_en: 'A magpie is a very industrious bird. She builds up to eight nests, and then chooses the best of them. The entrance to the magpie\'s nest always faces south, so that the dwelling will be warmer. Magpies are the only birds that recognize themselves in the mirror.',
			image: 'https://live.staticflickr.com//65535//49360363066_ff02bb6a73.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC500868-Pica%20pica2019.08.23_09.18_02.mp3'
		},
		{
			id: 6,
			name: 'Сойка',
			name_en: 'Jay',
			duration: '00:33',
			species: 'Garrulus glandarius',
			description: 'Когда сойка волнуется, хохолок на её голове взъерошивается. Птица старается создать устрашающее зрелище. Сойки умеют имитировать голоса других птиц, животных и звуки, которые создает человек. На зиму они делают большие запасы желудей и орехов.',
			description_en: 'When a jay gets excited, the tuft on its head ruffles. The bird tries to create an intimidating spectacle. Jays can imitate the voices of other birds, animals, and human-made sounds. They make large stores of acorns and nuts for the winter.',
			image: 'https://live.staticflickr.com//65535//49369678956_9a7465c7f4.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/TFOGOENSTQ/XC501517-191008_1590%201300.%20Eichelh%C3%A4her%20D%2C%20NW%2C%20LEV.%20Stephan%20Risch.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Зяблик',
			name_en: 'Chaffinch',
			duration: '00:43',
			species: 'Fringilla coelebs',
			description: 'В дикой природе насчитывается 450 видов зябликов. Зимой зяблики ведут стайный образ жизни. Иногда в их семьях можно увидеть воробьев. Запевают зяблики весной, с наступлением брачного периода. Их пение – это заливистые многоминутные рулады.',
			description_en: 'There are 450 species of finches in the wild. In winter, finches lead a gregarious lifestyle. Sometimes sparrows can be seen in their families. Finches sing in spring, with the onset of their mating season. Their singing is a rousing, minute-long roulade.',
			image: 'https://live.staticflickr.com/65535/49143150817_2d3a2f6c1e.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC512407-150622_03%20zi%C4%99ba%20%282%29.mp3'
		},
		{
			id: 2,
			name: 'Клёст',
			name_en: 'Сrossbill',
			duration: '00:12',
			species: 'Loxia curvirostra',
			description: 'Клестов называют «рождественскими» птицами. В естественных условиях они дают потомство зимой – в январе. Эти птицы утепляют свои гнезда мхом и шерстью животных, потому птенцам не холодно. В поисках шишек клесты могут улетать за 3500 км от гнезда.',
			description_en: 'Crossbills are called "Christmas" birds. Under natural conditions, they give birth in winter, in January. These birds insulate their nests with moss and animal hairs, so the chicks are not cold. In search of cones, crossbills can fly 3500 km away from the nest.',
			image: 'https://live.staticflickr.com//65535//49365470123_f2de66bb35.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/OTVUCEGYZN/XC495381-Kruisbek%20roep%20NHD%20290619.mp3'
		},
		{
			id: 3,
			name: 'Горлица',
			name_en: 'turtledove',
			duration: '00:58',
			species: 'Streptopelia turtur',
			description: 'Горлица обитает в смешанных и широколиственных лесах, а также в городских парках и поселках. Птицы часто выбирают места жизни рядом с человеком и легко привыкают к людям. Благодаря мелодичному приятному пению горлиц часто разводят в домашних условиях.',
			description_en: 'The turtledove lives in mixed and broad-leaved forests, as well as in urban parks and townships. Birds often choose to live near people and easily get used to people. Because of their melodious, pleasant singing, turtledoves are often raised in homes.',
			image: 'https://live.staticflickr.com/65535/48063004977_84252f9ceb.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC324106-Turkawka_Streptopelia_turtur_Poland_Jarek_Matusiak_2011625_07.mp3'
		},
		{
			id: 4,
			name: 'Дятел',
			name_en: 'Woodpecker',
			duration: '00:18',
			species: 'Dendrocopos major',
			description: 'Дятел – заметная и шумная птица, часто живет рядом с человеком. С середины января до конца июня можно услышать «барабанную дробь» дятлов – трель от вибрации веток под быстрыми ударами клюва птицы. В хорошую погоду дробь слышна в радиусе 1,5 км.',
			description_en: 'The woodpecker is a conspicuous and noisy bird, often living close to humans. From mid-January to the end of June you can hear the "drumming" of woodpeckers - a trill from the vibration of branches under the rapid blows of the bird\'s beak. In good weather the drumming can be heard within a radius of 1.5 km.',
			image: 'https://live.staticflickr.com/65535/49339376578_e933426455.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC518928-AB-017%20dzi%C4%99cio%C5%82%20du%C5%BCy%20agresja%20%282%29.mp3'
		},
		{
			id: 5,
			name: 'Удод',
			name_en: 'Hoopoe',
			duration: '00:30',
			species: 'Upupa epops',
			description: 'Удоды предпочитают жить на открытых ландшафтах с отдельными деревьями или рощами. Наиболее удобными для птицы являются лесостепь и саванна. Удод может выбирать места жительства рядом с человеком: пастбища, виноградники, фруктовые сады.',
			description_en: 'Hoopoe prefer to live in open landscapes with isolated trees or groves. Forest-steppe and savannah are the most convenient for the bird. The hoopoe may choose to live near humans: pastures, vineyards, orchards.',
			image: 'https://live.staticflickr.com//65535//49226383598_6f8be86a06.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC477326-dudek%20%282%29.mp3'
		},
		{
			id: 6,
			name: 'Стриж',
			name_en: 'Swift',
			duration: '00:10',
			species: 'Apus apus',
			description: 'Стрижа можно увидеть практически в каждом уголке планеты. Они обитают как в лесных зонах, так и на открытых местностях. Живут стрижи крупными стаями. Большие колонии этих птиц можно увидеть в городах или на прибрежных скалах.',
			description_en: 'Swifts can be seen in almost every corner of the planet. They live both in forest areas and in open areas. Swifts live in large flocks. Large colonies of these birds can be seen in cities or on coastal cliffs.',
			image: 'https://live.staticflickr.com//65535//48386150031_7b749df74b.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/TMUAWSDHDJ/XC511871-G.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Жаворонок',
			name_en: 'Lark bird',
			duration: '00:56',
			species: 'Alauda arvensis',
			description: 'Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.',
			description_en: 'Larks are migratory birds. From the beginning of September, they fly south. They come back at the beginning of March, regardless of whether snow has melted or not. The arrival of the skylarks was used to determine the arrival of spring and the time when it was time to plow the land.',
			image: 'https://live.staticflickr.com/65535/47105096764_f751fba568.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3'
		},
		{
			id: 2,
			name: 'Соловей',
			name_en: 'Nightingale',
			duration: '01:01',
			species: 'Luscinia luscinia',
			description: 'Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.',
			description_en: 'Nightingales sing from early May until the end of summer. Each nightingale song consists of 12 repetitive elements, which are also called knees. In addition to their own trills, nightingales easily and well adopt the singing of other birds.',
			image: 'https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3'
		},
		{
			id: 3,
			name: 'Скворец',
			name_en: 'Starling',
			duration: '22:25',
			species: 'Sturnus vulgaris',
			description: 'Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.',
			description_en: 'Starlings are migratory birds. The synchronized flight of large flocks of starlings is called murmuration. It is a beautiful and mesmerizing phenomenon - many birds seem to dance in the air, forming intricate figures that decrease and increase in the sky.',
			image: 'https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3'
		},
		{
			id: 4,
			name: 'Иволга',
			name_en: 'Oriole',
			duration: '00:29',
			species: 'Oriolus oriolus',
			description: 'Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.',
			description_en: 'The oriole\'s melodious voice has been compared to the sound of a flute. It is difficult for humans to see the oriole, as it lives high up in the trees. The oriole is not only a very beautiful bird, but also a useful one. It destroys poisonous caterpillars that other birds do not eat.',
			image: 'https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3'
		},
		{
			id: 5,
			name: 'Свиристель',
			name_en: 'Whistleblower',
			duration: '00:08',
			species: 'Bombycilla garrulus',
			description: 'У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.',
			description_en: 'Whistleblowers have very tenacious claws, which help the bird stay on branches and nibble on berries, which are the hardest to reach. During courtship, the male offers the female a berry or other treat. If the female accepts it, the birds create a pair.',
			image: 'https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3'
		},
		{
			id: 6,
			name: 'Щегол',
			name_en: 'Goldfinch',
			duration: '00:28',
			species: 'Carduelis carduelis',
			description: 'Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю.',
			description_en: 'Goldfinches sing beautifully and melodically. Both in nature and in captivity, they chirp almost all year round. More than 20 iridescent trills can be distinguished in the twittering. Goldfinches get used to people and can even return to the owner after being released into the wild',
			image: 'https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Орёл',
			name_en: 'Eagle',
			duration: '00:10',
			species: 'Aquila nipalensis',
			description: 'В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров.',
			description_en: 'In ancient times, the eagle was a symbol of the sun. Eagles often soar above the ground, with a speed of up to 240 km/h. The illusion of slow movement is due to the height of the flight - more than 700 meters',
			image: 'https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3'
		},
		{
			id: 2,
			name: 'Коршун',
			name_en: 'Vulture',
			duration: '01:01',
			species: 'Milvus migrans',
			description: 'Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.',
			description_en: 'Vultures are large raptors, about half a meter tall and weighing up to 1 kg as adults. Their wings are narrow and long, with a wingspan of 1.5 m. Vultures often nest in large flocks and even form large colonies.',
			image: 'https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3'
		},
		{
			id: 3,
			name: 'Лунь',
			name_en: 'Lun',
			duration: '01:38',
			species: 'Circus cyaneus',
			description: 'Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».',
			description_en: 'The lun is a small falcon. It feeds mainly on rodents; voles, hamsters, and mice are the basis of its diet. The plumage of the lun may be ash-gray. The comparison "gray as a lun" is associated with such a bird.',
			image: 'https://live.staticflickr.com/4480/37240531151_b74619c99d.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3'
		},
		{
			id: 4,
			name: 'Сокол',
			name_en: 'Falcon',
			duration: '00:34',
			species: 'Falco peregrinus',
			description: 'Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.',
			description_en: 'The Latin name Falco is derived from the word "sickle" because of the sickle shape of its wings. The long and wide wings allow the falcon to fly high into the sky and soar freely. Falcon flight speeds reach 280-320 kilometers per hour.',
			image: 'https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3'
		},
		{
			id: 5,
			name: 'Ястреб',
			name_en: 'Hawk',
			duration: '00:53',
			species: 'Accipiter gentilis',
			description: 'Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.',
			description_en: 'All hawks are characterized by wide and short wings. Another distinctive feature is the white "eyebrows" above the eyes. Slavic vigilantes placed the image of a hawk on their banners as a symbol of bravery, power and ruthlessness to enemies.',
			image: 'https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3'
		},
		{
			id: 6,
			name: 'Филин',
			name_en: 'Owl',
			duration: '00:36',
			species: 'Bubo bubo',
			description: 'Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.',
			description_en: 'The flight of an owl is silent and its vision is very sharp. These features make the bird a consummate night hunter. The eagle owl has no natural enemies, no animal hunts adult birds. But baby-owls are attacked by foxes and wolves.',
			image: 'https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3'
		}
	],
	[
		{
			id: 1,
			name: 'Альбатрос',
			name_en: 'Albatross',
			duration: '00:21',
			species: 'Diomedea exulans',
			description: 'Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния.',
			description_en: 'The albatross is the largest flying bird in the world. It has a wingspan of three and a half and weighs ten kilograms. Albatrosses spend most of their lives in the air, covering vast distances over the ocean.',
			image: 'https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3'
		},
		{
			id: 2,
			name: 'Олуша',
			name_en: 'Booby',
			duration: '00:12',
			species: 'Sula nebouxii',
			description: 'Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок.',
			description_en: 'The blue-footed booby\'s special feature is not only the rich bright blue color of its feet, but also the fact that they are very warm. While other birds warm their clutches with their bodies, the blue-footed booby does it with its paws.',
			image: 'https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3'
		},
		{
			id: 3,
			name: 'Буревестник',
			name_en: 'Petrel',
			duration: '00:42',
			species: 'Puffinus griseus',
			description: 'Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.',
			description_en: 'The size of petrels varies. The smallest of them are up to 25 cm in length, the largest up to 1 m, with a wingspan of about 2 m. There is a belief that the appearance of the petrel in the air heralds a storm, as the name of the bird itself indicates.',
			image: 'https://live.staticflickr.com//607//22136056020_935cb113f9.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3'
		},
		{
			id: 4,
			name: 'Пеликан',
			name_en: 'Pelican',
			duration: '00:11',
			species: 'Pelecanus',
			description: 'Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.',
			description_en: 'Pelicans are inhabitants of seas and rivers. They walk clumsily, but they fly and swim well. They feed mainly on fish, arrange collective hunts - lining up in a semicircle they flap the water with their wings and beaks and drive frightened fish out into shallow water.',
			image: 'https://live.staticflickr.com/65535/49159147156_dcbbb5c12a.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3'
		},
		{
			id: 5,
			name: 'Пингвин',
			name_en: 'Pinguin',
			duration: '00:56',
			species: 'Aptenodytes forsteri',
			description: 'Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.',
			description_en: 'The male Emperor penguin reaches a height of 130 cm and its weight can approach 50 kg. Of all modern penguins, this species is the largest. The penguin\'s diet consists of fish, squid and krill. The birds hunt in the ocean in large groups.',
			image: 'https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3'
		},
		{
			id: 6,
			name: 'Чайка',
			name_en: 'Seagull',
			duration: '00:40',
			species: 'Larus argentatus',
			description: 'Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.',
			description_en: 'Seagulls inhabit the shores of seas, lakes, rivers, reservoirs, swamps, often nesting on islands. Since the end of the last century, seagulls began to appear in large cities, where they make nests on the roofs of buildings. All gulls lead a colonial lifestyle.',
			image: 'https://live.staticflickr.com/65535/48577115317_7034201dde.jpg',
			audio: 'https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3'
		}
	]
];
export default birdsData;
