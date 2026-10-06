/* ==========================================================
   #LezaDeFiesta v2.0 - Base de Datos Masiva y Novedades
   ========================================================== */

const APP_VERSION = "2.0"; // Cambiar este string cuando hagas futuras actualizaciones

const DATABASE = {
  yoNunca: {
    light: [
      "Yo nunca me he quedado dormido en el autobús o tren y me he pasado de parada.",
      "Yo nunca he fingido estar enfermo para librarme de un compromiso que me daba pereza.",
      "Yo nunca he mirado el móvil ajeno por encima del hombro disimulando.",
      "Yo nunca he dicho 'ya salgo' cuando ni siquiera me había cambiado de ropa.",
      "Yo nunca he roto algo en una fiesta o casa ajena y me he quedado callado.",
      "Yo nunca he tropezado en plena calle y me he puesto a correr disimulando.",
      "Yo nunca he olvidado el cumpleaños de un amigo cercano o familiar directo.",
      "Yo nunca he usado la ropa o colonia de otra persona sin pedirle permiso.",
      "Yo nunca he cantado con auriculares a todo volumen pensando que sonaba bien.",
      "Yo nunca he fingido que me gustaba un regalo que en el fondo me parecía horrible.",
      "Yo nunca me he reído a carcajadas en un momento completamente inapropiado o solemne.",
      "Yo nunca he dejado un mensaje en 'visto' durante varios días por pura pereza.",
      "Yo nunca he comido comida del suelo aplicando la regla de los cinco segundos.",
      "Yo nunca he fingido hablar por teléfono para evitar saludar a alguien en la calle.",
      "Yo nunca he stalkeado tanto a alguien que le di me gusta a una foto de hace años.",
      "Yo nunca he salido de casa con la ropa del revés o con una etiqueta colgando.",
      "Yo nunca he hecho una captura de pantalla y se la he enviado por error a esa misma persona.",
      "Yo nunca he tirado la comida que no me gustaba disimuladamente a la servilleta o planta.",
      "Yo nunca he bailado delante del espejo creyéndome una estrella de videoclip.",
      "Yo nunca he buscado mi propio nombre en Google para ver qué salía.",
      "Yo nunca he entrado al baño equivocado (chicos/chicas) por despiste total.",
      "Yo nunca he fingido entender un chiste del que no me he enterado de nada.",
      "Yo nunca he intentado abrir la puerta de un coche que no era el mío pensando que sí.",
      "Yo nunca he saludado con la mano a un desconocido creyendo que era un amigo.",
      "Yo nunca he fingido saber de un tema o película de la que no tenía ni idea.",
      "Yo nunca me he puesto colonia de muestra en una tienda solo para no gastar de la mía.",
      "Yo nunca he devuelto una prenda de ropa usada con la etiqueta todavía puesta.",
      "Yo nunca he mentido sobre mi edad para entrar en algún sitio o en internet.",
      "Yo nunca he llorado viendo una película de dibujos animados.",
      "Yo nunca me he asustado con mi propio reflejo en un escaparate o cristal.",
      "Yo nunca he mandado un audio de más de 5 minutos que parecía un podcast.",
      "Yo nunca he dejado la cuchara dentro del microondas por despiste.",
      "Yo nunca he fingido que se me cortaba la llamada para colgar a alguien pesado.",
      "Yo nunca he intentado arreglar un aparato electrónico dándole golpes.",
      "Yo nunca he buscado en Google síntomas médicos y he acabado pensando que me moría.",
      "Yo nunca he cantado la letra de una canción en inglés inventándomela por completo.",
      "Yo nunca he dicho 'te escucho' cuando no estaba prestando la más mínima atención.",
      "Yo nunca he borrado un comentario en redes porque tenía cero likes.",
      "Yo nunca he fingido tener prisa para cortar una conversación por la calle.",
      "Yo nunca me he comprado algo por puro impulso y jamás lo he llegado a estrenar.",
      "Yo nunca he probado la comida de un bebé o pienso de mascota por curiosidad.",
      "Yo nunca he culpado al perro o al gato de un ruido o gas mío.",
      "Yo nunca he dejado una serie a medias en el penúltimo capítulo por pura desidia.",
      "Yo nunca he perdido las gafas de sol o el móvil teniéndolo en la mano o en la cabeza.",
      "Yo nunca me he puesto a limpiar mi habitación solo para procrastinar un examen.",
      "Yo nunca he fingido ser vegetariano o alérgico a algo solo porque no me gustaba.",
      "Yo nunca he mirado el menú de un restaurante antes de ir para decidir qué pedir.",
      "Yo nunca he tenido que pedir dinero prestado porque me quedé sin nada en la cuenta.",
      "Yo nunca he usado champú o gel de hotel para llevarme todos los botes a casa.",
      "Yo nunca he intentado hacer un truco de magia y he quedado en absoluto ridículo.",
      "Yo nunca me he quedado encerrado en una habitación o balcón sin poder salir.",
      "Yo nunca he escondido comida en mi cuarto para que nadie más se la comiera.",
      "Yo nunca he fingido no ver una notificación para responder doce horas más tarde.",
      "Yo nunca he copiado descaradamente en un examen con chuleta en la muñeca.",
      "Yo nunca he puesto una excusa familiar falsa para no salir de casa un domingo.",
      "Yo nunca he vuelto a envolver un regalo que me hicieron para dárselo a otra persona.",
      "Yo nunca he entrado en una tienda, me he probado cinco cosas y me he ido sin comprar nada.",
      "Yo nunca he buscado cómo se escribe una palabra básica en Google por dudar de su ortografía.",
      "Yo nunca me he quedado mirando fijamente a alguien sin darme cuenta en transporte público.",
      "Yo nunca he tenido una discusión imaginaria en la ducha y la he ganado con honores.",
      "Yo nunca he usado calcetines desparejados esperando que nadie se diera cuenta.",
      "Yo nunca he tenido una pesadilla tan real que me desperté enfadado con alguien.",
      "Yo nunca he mentido en mi currículum sobre mi nivel real de inglés o Excel.",
      "Yo nunca he puesto el modo avión para que dejaran de llegarme mensajes.",
      "Yo nunca he fingido tener novia/novio para quitarme a alguien de encima.",
      "Yo nunca me he quemado la lengua por no esperar a que se enfriara la comida.",
      "Yo nunca he metido comida o bebida a escondidas en el cine.",
      "Yo nunca he fingido saber bailar salsa, bachata o reguetón y he hecho el payaso.",
      "Yo nunca me he cortado el pelo yo mismo en casa con un resultado desastroso.",
      "Yo nunca he pedido perdón a un maniquí tras chocarme con él sin mirar.",
      "Yo nunca he dicho 'qué calor' o 'qué frío' en un ascensor por romper el silencio incómodo.",
      "Yo nunca he mirado el precio de un regalo que me hicieron para ver cuánto costó.",
      "Yo nunca he tenido una playlist secreta con música que me daría vergüenza reconocer.",
      "Yo nunca he fingido que se me caía el boli para cotillear el examen de al lado.",
      "Yo nunca he intentado mover objetos con la mente creyendo que tenía superpoderes.",
      "Yo nunca he guardado una foto mía que me gustaba mucho en la carpeta de favoritos.",
      "Yo nunca me he equivocado de persona al dar un abrazo por la espalda.",
      "Yo nunca he fingido estar dormido en el coche para no tener que bajar el equipaje.",
      "Yo nunca he abierto la nevera diez veces seguidas esperando que apareciera comida nueva.",
      "Yo nunca he fingido entender el funcionamiento de la bolsa de valores.",
      "Yo nunca me he quedado atrapado en una prenda de ropa en un probador.",
      "Yo nunca he tenido una conversación completa de media hora con mi mascota.",
      "Yo nunca he probado la comida de otra persona disimuladamente mientras miraba a otro lado.",
      "Yo nunca he dicho que ya había visto una película mítica sin tener ni idea del final.",
      "Yo nunca me he tropezado en unas escaleras mecánicas o en un bordillo plano.",
      "Yo nunca he fingido dolor de cabeza para marcharme antes de una cena.",
      "Yo nunca he dejado la ropa limpia en la silla durante dos semanas enteras.",
      "Yo nunca he intentado cantar en falsete imitando a un cantante y se me ha roto la voz.",
      "Yo nunca he pensado que un producto era gratis solo porque no tenía la etiqueta.",
      "Yo nunca he mentido al peluquero diciendo que me encantaba el corte cuando lo odiaba.",
      "Yo nunca he mandado un sticker o emoji sin querer que cambió el sentido de una frase.",
      "Yo nunca me he despertado sin recordar en qué día de la semana vivía.",
      "Yo nunca he mirado por la mirilla de la puerta para evitar cruzarme con un vecino.",
      "Yo nunca he llevado dos zapatillas de diferente modelo puestas a la calle.",
      "Yo nunca he fingido estar concentrado trabajando cuando solo miraba las musarañas.",
      "Yo nunca he intentado pagar con una tarjeta caducada o sin saldo y he pasado vergüenza.",
      "Yo nunca he intentado hacer la croqueta en la cama y me he caído al suelo.",
      "Yo nunca he dicho que llegaba en 5 minutos sabiendo que tardaría mínimo media hora.",
      "Yo nunca he puesto una alarma con una canción que ahora aborrezco de por vida.",
      "Yo nunca he jugado a piedra, papel o tijera para tomar una decisión importante."
    ],
    fiesta: [
      "Yo nunca he perdido el móvil, las llaves o la cartera durante una noche de fiesta.",
      "Yo nunca he prometido 'no vuelvo a beber nunca más' y he vuelto a beber esa misma semana.",
      "Yo nunca he intentado colarme en una discoteca o zona VIP sin pagar.",
      "Yo nunca he terminado de after en la casa o bajera de personas que acababa de conocer.",
      "Yo nunca he mandado un audio de fiesta del que me he arrepentido la mañana siguiente.",
      "Yo nunca he hecho la bomba de humo (irme de una fiesta sin despedirme de nadie).",
      "Yo nunca he tenido que cuidar toda la noche a un amigo que iba destruido.",
      "Yo nunca he perdido una chaqueta de fiesta y nunca más ha vuelto a aparecer.",
      "Yo nunca he mezclado tres o más bebidas alcohólicas diferentes en el mismo vaso.",
      "Yo nunca he besado a alguien en una fiesta y luego no me acordaba de su nombre.",
      "Yo nunca he subido un vídeo o historia a redes que borré al despertar de la vergüenza.",
      "Yo nunca me he gastado más de 50€ en una sola noche sin tener idea de en qué se fueron.",
      "Yo nunca he intentado ligar con el camarero/a para conseguir copas o chupitos gratis.",
      "Yo nunca me he quedado dormido en el suelo de un bar o en el baño de un local.",
      "Yo nunca he terminado desayunando churros o kebab sin haber dormido nada.",
      "Yo nunca he roto un vaso o botella en una discoteca y me he alejado disimulando.",
      "Yo nunca me he caído por culpa de llevar copas de más intentando hacer un baile épico.",
      "Yo nunca he pedido una ronda de chupitos y me he escaqueado a la hora de pagar.",
      "Yo nunca he bebido del vaso de otra persona sin saber qué demonios llevaba dentro.",
      "Yo nunca he acabado descalzo en una fiesta porque no aguantaba los zapatos.",
      "Yo nunca he vomitado en la calle o en un portal durante una noche de fiesta.",
      "Yo nunca he convencido a alguien sobrio para que me llevara a casa en coche.",
      "Yo nunca he entrado en un local que juré que jamás pisaría en mi vida.",
      "Yo nunca me he creído barman y he preparado una mezcla infernal en una previa.",
      "Yo nunca he intentado entrar a una fiesta diciendo que era primo del DJ o del dueño.",
      "Yo nunca he cantado a gritos el himno de una serie o reguetón viejo abrazado a desconocidos.",
      "Yo nunca he tenido que pedirle ropa prestada a un amigo porque la mía estaba destrozada.",
      "Yo nunca he perdido las gafas o las lentillas en mitad de una pista de baile.",
      "Yo nunca he acabado durmiendo con la ropa de fiesta puesta y los zapatos en la cama.",
      "Yo nunca he tenido que buscar mi coche al día siguiente porque no recordaba dónde aparqué.",
      "Yo nunca me he equivocado de casa o de portal al volver borracho de madrugada.",
      "Yo nunca he escondido una botella en la calle o en un arbusto para la previa.",
      "Yo nunca he hecho un 'sinpa' en un bar o fiesta de pueblo por despiste o picardía.",
      "Yo nunca he vuelto a casa caminando más de 5 kilómetros porque no había taxis.",
      "Yo nunca me he puesto a llorar en el baño de una discoteca diciendo que quería a todos.",
      "Yo nunca he tirado una copa entera encima de otra persona en una pista de baile.",
      "Yo nunca he mandado un mensaje a mi jefe o profesor un sábado a las 5 de la mañana.",
      "Yo nunca he intentado ligar usando una mentira absurda sobre mi profesión o riqueza.",
      "Yo nunca me he comido la comida de la nevera de un amigo sin pedirle permiso de madrugada.",
      "Yo nunca he llevado gafas de sol de fiesta dentro de una discoteca oscura.",
      "Yo nunca he subido al escenario o tarima de un local sin permiso del de seguridad.",
      "Yo nunca he tenido una discusión acalorada sobre un tema ridículo con un desconocido en la barra.",
      "Yo nunca he salido de fiesta sin un duro en la cartera esperando que me invitaran.",
      "Yo nunca me he despertado en una ciudad o pueblo que no era el mío.",
      "Yo nunca he hecho el trenecito o la conga en una boda o discoteca motivado de más.",
      "Yo nunca he intentado robar una señal de tráfico, valla o cartel durante las fiestas.",
      "Yo nunca he llamado por teléfono a un amigo diez veces seguidas a las 4 de la mañana.",
      "Yo nunca me he bebido el alcohol que sobró de los vasos al día siguiente por la mañana.",
      "Yo nunca he acabado en urgencias o con un vendaje por culpa de una tontería de fiesta.",
      "Yo nunca he dejado a mi cuadrilla tirada para irme detrás de un ligue de fiesta.",
      "Yo nunca he hecho chupitos con alcohol de 70 grados o licores caseros peligrosos.",
      "Yo nunca me he reído tanto de fiesta que me he meado literalmente encima.",
      "Yo nunca he intentado saltar una valla de fiesta y me he quedado enganchado del pantalón.",
      "Yo nunca he fingido ser extranjero en un bar para vacilar a la gente de la barra.",
      "Yo nunca he salido de fiesta un día antes de un examen final o entrevista de trabajo.",
      "Yo nunca he perdido el monedero con todo mi dinero en los primeros diez minutos de salir.",
      "Yo nunca me he bebido un chupito con tabasco o ingredientes incomibles por una apuesta.",
      "Yo nunca he tenido que salir escoltado o acompañado fuera de un bar por el portero.",
      "Yo nunca he prometido invitar a una ronda entera y luego me ha temblado la mano.",
      "Yo nunca he fingido estar más borracho de lo que estaba para que me hicieran caso.",
      "Yo nunca he intentado hacer malabares con botellas llenas y las he reventado.",
      "Yo nunca he acabado de fiesta un martes o miércoles diciendo que solo salía a tomar una.",
      "Yo nunca he compartido vaso con más de cinco personas en una misma ronda.",
      "Yo nunca me he quedado atrapado en el pestillo de un baño portátil o químico.",
      "Yo nunca he hecho un brindis tan motivado que rompí la copa contra la de otro.",
      "Yo nunca he perdido las zapatillas o una sandalia en un barrizal de fiesta de pueblo.",
      "Yo nunca he salido a bailar al centro de la pista cuando no había absolutamente nadie bailando.",
      "Yo nunca he hecho que echaran a un amigo de un bar por reírme de sus tonterías.",
      "Yo nunca me he bebido un cubata que llevaba más de tres horas apoyado en una columna.",
      "Yo nunca he intentado saltar a hombros de un amigo y nos hemos caído los dos.",
      "Yo nunca he dejado las llaves de casa dentro y he tenido que despertar a toda la familia de madrugada.",
      "Yo nunca he dicho 'la última y nos vamos' y me he quedado cuatro horas más.",
      "Yo nunca he pedido una canción al DJ veinte veces hasta que me mandó a paseo.",
      "Yo nunca me he despertado con moretones en el cuerpo sin tener la menor idea de dónde salieron.",
      "Yo nunca he intentado regatear el precio de una copa al camarero como si fuera un bazar.",
      "Yo nunca he acabado en una charanga o banda de pueblo tocando un instrumento sin saber.",
      "Yo nunca he grabado un vídeo vergonzoso de un amigo y amenazado con subirlo si no me invitaba.",
      "Yo nunca he bailado la macarena o paquito el chocolatero dándolo absolutamente todo.",
      "Yo nunca me he ido a casa sin pagar mi parte del bote común de la previa.",
      "Yo nunca he perdido el DNI la misma semana que tenía que renovarlo.",
      "Yo nunca me he tomado un chupito que ardía en llamas y casi me quemo las cejas.",
      "Yo nunca he intentado subir una historia en mejores amigos y la puse en público por error.",
      "Yo nunca he salido de fiesta con resaca del día anterior para curarla con más alcohol.",
      "Yo nunca he tenido que dormir en el suelo o en una esterilla porque no cabía en la cama.",
      "Yo nunca he salido con calcetines blancos y han vuelto a casa negros del barro.",
      "Yo nunca he intentado tirarme a una piscina o fuente pública en plena noche de fiesta.",
      "Yo nunca he fingido ser sobrio delante de la policía o vigilantes de seguridad.",
      "Yo nunca he gritado '¡esa es mi canción!' cuando empezó a sonar la peor canción del año.",
      "Yo nunca he acabado en una peña o bajera que olía a vino añejo y humedad.",
      "Yo nunca me he tomado un chupito de golpe y se me ha salido por la nariz.",
      "Yo nunca he escondido un cubata bajo la chaqueta para sacarlo de un bar a otro.",
      "Yo nunca he dejado el abrigo en el suelo de un rincón para ahorrarme el guardarropa.",
      "Yo nunca he vuelto a casa con el sol completamente fuera y la gente yendo a comprar el pan.",
      "Yo nunca he bailado pegado a un altavoz gigante hasta quedarme sordo dos días.",
      "Yo nunca he convencido a media fiesta para cantar a capela una canción mítica.",
      "Yo nunca he tenido que pedirle perdón al camarero por romper algo en la barra.",
      "Yo nunca he entrado en un local gratis solo por conocer a la persona de la puerta.",
      "Yo nunca he acabado comiendo pizza fría a las seis de la mañana sentado en un bordillo.",
      "Yo nunca he dicho que no me gustaba el reguetón y he perreado hasta el suelo de fiesta.",
      "Yo nunca he sobrevivido a una noche de fiesta gracias a beber agua a litros antes de dormir."
    ],
    hot: [
      "Yo nunca he besado al ex o al crush de un amigo o amiga.",
      "Yo nunca he tenido un sueño subido de tono con alguien de esta misma sala.",
      "Yo nunca he enviado o recibido una foto sugerente sin ropa.",
      "Yo nunca he tenido una aventura con un compañero de clase o de trabajo.",
      "Yo nunca he practicado sexting en plena madrugada estando de fiesta.",
      "Yo nunca he sido infiel ni he ayudado a que otra persona lo fuera.",
      "Yo nunca me he liado con dos o más personas distintas en una misma noche.",
      "Yo nunca he tenido una cita tan mala que me inventé una emergencia para huir.",
      "Yo nunca he tenido un lío con alguien diez años mayor que yo.",
      "Yo nunca he buscado el perfil del ex de mi pareja o crush desde una cuenta falsa.",
      "Yo nunca me he liado con alguien única y exclusivamente por despecho.",
      "Yo nunca he mandado un mensaje caliente a la persona equivocada por error.",
      "Yo nunca he fingido satisfacción solo para que el momento terminara antes.",
      "Yo nunca he probado nada con alguien de mi mismo sexo.",
      "Yo nunca he jugado a verdad o reto o a la botella con segundas intenciones claras.",
      "Yo nunca he tenido una fantasía íntima con el hermano/a de un amigo.",
      "Yo nunca he tenido un encuentro íntimo en un lugar público o al aire libre.",
      "Yo nunca me he liado con alguien de quien ahora me da total vergüenza admitir.",
      "Yo nunca he usado una aplicación de citas estando ya en una relación.",
      "Yo nunca he guardado fotos o vídeos íntimos en una carpeta secreta o con contraseña.",
      "Yo nunca he tenido un 'amigo con derecho a roce' que acabó complicándose de más.",
      "Yo nunca he hecho el amor en un coche en un descampado o aparcamiento.",
      "Yo nunca me he liado con alguien sin acordarme de su nombre al día siguiente.",
      "Yo nunca he dejado marcas o chupetones visibles en el cuello de otra persona.",
      "Yo nunca he tenido que inventar una mentira enorme para tapar un lío amoroso.",
      "Yo nunca he tenido una cita a ciegas que resultó ser un absoluto desastre.",
      "Yo nunca he vuelto a caer con mi ex después de haber dicho mil veces que jamás.",
      "Yo nunca he tenido un encuentro apasionado en el baño de un bar o fiesta.",
      "Yo nunca he tenido una conversación caliente mientras estaba en una comida familiar.",
      "Yo nunca me he sentido atraído por el padre o la madre de un amigo.",
      "Yo nunca he besado a alguien solo para poner celosa a una tercera persona.",
      "Yo nunca he grabado o dejado que me grabaran en una situación íntima.",
      "Yo nunca he fingido estar borracho para justificar haberme lanzado a besar a alguien.",
      "Yo nunca he tenido un lío de verano que duró solo 24 horas y jamás volví a ver.",
      "Yo nunca he tenido un sueño ardiente con alguien que me cae realmente mal.",
      "Yo nunca he tenido ropa interior picante guardada solo para ocasiones especiales.",
      "Yo nunca me he liado con alguien que sabía perfectamente que tenía pareja.",
      "Yo nunca he borrado mensajes o chats de WhatsApp antes de que los viera mi pareja.",
      "Yo nunca he tenido una cita solo porque la otra persona me invitaba a cenar gratis.",
      "Yo nunca he practicado juegos de rol o disfraces en la intimidad.",
      "Yo nunca he dejado que me pagaran copas toda la noche sin tener intención de nada.",
      "Yo nunca he hecho una llamada subida de tono que duró más de una hora.",
      "Yo nunca me he liado con dos personas del mismo grupo de amigos.",
      "Yo nunca he tenido un fetiche extraño que jamás le he contado a nadie.",
      "Yo nunca he utilizado juguetes íntimos solo o en compañía.",
      "Yo nunca me he despertado en una cama ajena sin tener ropa cerca para escapar.",
      "Yo nunca he sentido atracción por un profesor, médica o autoridad.",
      "Yo nunca he hecho un striptease o baile sugerente para alguien.",
      "Yo nunca he tenido un lío amoroso en la piscina, jacuzzi o en el mar.",
      "Yo nunca he enviado un '¿qué haces despierto?' a las 3 de la mañana con intenciones claras.",
      "Yo nunca he besado a más de tres personas diferentes en un mismo fin de semana.",
      "Yo nunca he fingido ser inocente cuando en verdad soy la persona más picante del grupo.",
      "Yo nunca he sido pillado in fraganti por mis padres o amigos en pleno acto.",
      "Yo nunca he tenido que ponerme la ropa al revés o deprisa para salir corriendo.",
      "Yo nunca he tenido un flechazo inmediato en el transporte público que me quitó el hipo.",
      "Yo nunca he tenido una relación a distancia que se mantenía casi solo por videollamadas hot.",
      "Yo nunca he confesado mis sentimientos a alguien solo para que me besara.",
      "Yo nunca he jugado a strip-poker o juegos de cartas quitándome ropa.",
      "Yo nunca me he liado con alguien en un probador de ropa o cine oscuro.",
      "Yo nunca he usado comida (nata, chocolate, frutas) en un juego íntimo.",
      "Yo nunca me he enamorado perdidamente de un rollete de una sola noche.",
      "Yo nunca he mirado el escote o las piernas de un amigo/a con deseo prohibido.",
      "Yo nunca he recibido una propuesta indecente de alguien a cambio de dinero o favores.",
      "Yo nunca he tenido que escapar por la ventana o puerta trasera de una casa ajena.",
      "Yo nunca he fingido que me gustaban las mismas cosas raras solo para ligar.",
      "Yo nunca he tenido una sesión de besos apasionados que duró más de dos horas seguidas.",
      "Yo nunca he dejado una prenda interior olvidada en la casa o coche de otra persona.",
      "Yo nunca he tenido una cita que empezó en un bar y acabó en un hotel en 1 hora.",
      "Yo nunca he besado a alguien en una cabina de fotos o fotomatón.",
      "Yo nunca he mentido sobre el número real de parejas que he tenido.",
      "Yo nunca he tenido curiosidad por participar en un trío o intercambio.",
      "Yo nunca he tenido una aventura con el vecino/a del edificio o del pueblo.",
      "Yo nunca he dado un beso con mordisco que hizo sangrar el labio de la otra persona.",
      "Yo nunca he sido el 'secreto' de alguien durante varios meses.",
      "Yo nunca he sentido celos incontrolables viendo a mi crush bailar con otro/a.",
      "Yo nunca he hecho un cumplido provocativo al oído a alguien en plena pista de baile.",
      "Yo nunca he tenido una relación de puro interés físico sin hablar jamás de nada profundo.",
      "Yo nunca he tenido que inventar una historia para justificar un chupetón en el cuello.",
      "Yo nunca he salido a la calle sin ropa interior por pura adrenalina o comodidad.",
      "Yo nunca he sentido química sexual explosiva con alguien a quien no soportaba como persona.",
      "Yo nunca he mandado un selfie sugerente desde el baño de un bar.",
      "Yo nunca he tenido que morder una almohada para no hacer ruido en una casa con gente.",
      "Yo nunca he tenido un amor platónico inconfesable durante más de 3 años.",
      "Yo nunca me he liado con alguien mayor solo por su experiencia.",
      "Yo nunca he aprovechado un apagón o momento a oscuras para tocar o besar a alguien.",
      "Yo nunca he tenido un lío romántico en la playa mientras la marea casi nos tapaba.",
      "Yo nunca he enviado un mensaje atrevido y he apagado el móvil asustado por la respuesta.",
      "Yo nunca he tenido una fantasía recurrente con alguien que está sentado en esta mesa.",
      "Yo nunca he besado a alguien en un ascensor entre planta y planta.",
      "Yo nunca he tenido que ducharme con agua fría para bajar la temperatura del cuerpo.",
      "Yo nunca he probado literatura erótica o películas calientes buscando inspiración.",
      "Yo nunca he hecho una promesa de amor eterno en plena noche de fiesta y pasión.",
      "Yo nunca he sentido ganas irresistibles de besar a un amigo del mismo grupo.",
      "Yo nunca he tenido una cita doble donde acabé deseando a la pareja de mi amigo.",
      "Yo nunca he recibido un mensaje con foto explícita en mitad de un examen o reunión seria.",
      "Yo nunca he tenido un roce sospechoso 'accidental' bailando en una discoteca apretada.",
      "Yo nunca he tenido un lío con alguien con quien juré sobre la biblia que jamás pasaría.",
      "Yo nunca he tenido que lavar las sábanas a las 4 de la mañana con urgencia.",
      "Yo nunca he mordido la oreja o el cuello de alguien para ponerle a cien al instante.",
      "Yo nunca me he arrepentido más de no haberme lanzado con alguien que de haberlo hecho."
    ]
  },
  probable: {
    light: [
      "sea la persona con más horas de pantalla y adicción al móvil del grupo?",
      "se gaste todo el sueldo nada más cobrar en caprichos completamente inútiles?",
      "llegue media hora tarde incluso a su propia boda o cumpleaños?",
      "se ría a carcajadas en un momento donde reine el silencio absoluto e incómodo?",
      "caiga en una estafa fácil de internet por confiado e inocente?",
      "se quede encerrado en un baño por no saber hacia dónde gira el pestillo?",
      "cante a gritos en la ducha creyendo que canta como los ángeles?",
      "cancele los planes un domingo por la tarde a última hora por pereza extrema?",
      "tenga más de 30 alarmas consecutivas programadas cada mañana?",
      "se ponga a hablar de su vida entera con desconocidos en la cola del súper?",
      "tropiece en una baldosa completamente lisa en mitad de la calle?",
      "se coma la comida ajena que estaba guardada con nombre en la nevera?",
      "deje en visto a todo el mundo durante tres días seguidos sin motivo?",
      "se compre ropa carísima que solo se va a poner una vez en la vida?",
      "llore viendo un vídeo emotivo de perritos o gatos en TikTok?",
      "se crea cualquier noticia falsa que le llegue por un grupo familiar?",
      "pierda las gafas de sol teniéndolas colocadas en la propia cabeza?",
      "se asuste con una paloma o un bicho inofensivo que pasa volando?",
      "devuelva una chaqueta a la tienda después de haberla usado todo un fin de semana?",
      "se duerma en el cine o en el teatro a los diez minutos de empezar la función?",
      "tenga el coche o la habitación con más basura y cajas acumuladas?",
      "se invente una excusa médica ridícula para librarse de un compromiso?",
      "busque en Google síntomas de un resfriado y piense que le queda un mes de vida?",
      "olvide la contraseña de su correo o teléfono y bloquee el dispositivo?",
      "se quede mirando al vacío con cara de bobo pensando en absolutas tonterías?",
      "rompa un plato o una taza en una cafetería y se haga el despistado?",
      "tenga la mayor cantidad de pestañas abiertas en el navegador del móvil?",
      "se ponga a ordenar los cajones justo el día antes de un examen o entrega importante?",
      "tarde más de dos horas en elegir qué ropa ponerse antes de salir?",
      "hable con voz tierna y de bebé cuando ve a cualquier perro por la calle?",
      "se gaste la mitad del presupuesto del viaje comprando souvenirs tontos?",
      "coma pizza fría del día anterior directamente del cartón para desayunar?",
      "tenga más memes absurdos guardados en la galería de su teléfono?",
      "salude a alguien efusivamente por la calle que no conocía de nada?",
      "se quede atrapado en un jersey en un probador y empiece a sudar del agobio?",
      "baile fatal en una discoteca pero con una seguridad y autoestima envidiables?",
      "pida un plato rarísimo en el restaurante solo por postureo y luego lo odie?",
      "se queje de que no tiene dinero mientras pide tres cafés y comida para llevar?",
      "se aprenda las canciones de un artista solo dos días antes de ir a su concierto?",
      "tenga la peor letra de escribir a mano del grupo?",
      "se enfade por perder una partida de un juego de mesa o del Mario Kart?",
      "diga que está listo en 5 minutos cuando ni siquiera se ha metido a la ducha?",
      "guarde ropa de hace diez años en el armario 'por si algún día vuelve a estar de moda'?",
      "compre un aparato de gimnasio para casa y acabe usándolo de perchero?",
      "se crea que puede arreglar un electrodoméstico roto y lo destroce más?",
      "sepa todos los cotilleos de la vida de famosos o vecinos sin conocerlos?",
      "tenga más grupos de WhatsApp completamente silenciados de por vida?",
      "se duerma en el transporte público y se despierte en la última estación de la línea?",
      "pierda el ticket del aparcamiento cinco minutos después de haberlo sacado?",
      "se crea un chef profesional por haber echado orégano a unos macarrones con tomate?",
      "pida prestado algo y se le olvide devolverlo durante más de dos años?",
      "se compre una agenda bonita para el nuevo año y solo escriba en las primeras dos páginas?",
      "tenga más fotos suyas en el carrete del móvil haciéndose selfies?",
      "deje el teléfono con un 1% de batería todo el día sin ponerlo a cargar?",
      "haga una captura de pantalla y la mande por error al mismo grupo de donde la sacó?",
      "se quede encerrado en un balcón por culpa del aire y tenga que gritar socorro?",
      "cante en inglés imitando palabras sin tener ni idea de lo que está diciendo?",
      "haga sonar una alarma del coche sin querer y no sepa cómo apagarla?",
      "se crea que va a ganar la lotería cada semana y gaste más de lo debido?",
      "se ría tanto de su propio chiste antes de contarlo que nadie entienda el final?",
      "tenga más cosas acumuladas en el carrito de compras online sin intención de comprar?",
      "se choque contra una puerta de cristal transparente recién limpiada?",
      "diga que no le gusta un dulce y se coma la mitad cuando nadie mira?",
      "se apunte al gimnasio el 1 de enero y no vuelva a ir nunca a partir del 15?",
      "tenga el historial de reproducciones de YouTube o TikTok más vergonzoso?",
      "use calcetines con agujeros en el dedo pensando que nadie se va a fijar jamás?",
      "hable en sueños y cuente secretos sin darse cuenta?",
      "intente matar a una mosca o mosquito y acabe tirando una lámpara?",
      "haga amigos en el baño de un local y se cuenten sus vidas enteras?",
      "confunda a un gemelo con el otro y meta la pata hasta el fondo?",
      "se crea el argumento de una película de ciencia ficción como si fuera real?",
      "mire diez veces el menú de comida a domicilio antes de pedir lo de siempre?",
      "tenga el teléfono móvil con la pantalla reventada y siga usándolo como si nada?",
      "invente una historia inverosímil para justificarse por llegar con retraso?",
      "se compre un libro gordísimo porque tiene una portada bonita y no lo lea jamás?",
      "haga un berrinche ridículo cuando tiene hambre y no hay comida a mano?",
      "hable por teléfono gesticulando con las manos como si la otra persona le viera?",
      "se meta en el coche de un desconocido pensando que es un Uber o un taxi?",
      "guarde cajas de teléfonos y zapatillas en el altillo del armario durante años?",
      "sea incapaz de armar un mueble básico siguiendo las instrucciones de montaje?",
      "le tenga pánico absoluto a las abejas o avispas y monte un escándalo público?",
      "se gaste dinero en skins o trajes para videojuegos virtuales?",
      "repita la misma anécdota diez veces al mismo grupo como si fuera nueva?",
      "lleve siempre un paraguas cuando no llueve y se le olvide el día que cae el diluvio?",
      "se trague un chicle por accidente y piense que se le va a quedar siete años dentro?",
      "haga una videollamada sin peinar y con la cámara apuntando al techo?",
      "pierda el mando de la televisión teniéndolo debajo del cojín donde está sentado?",
      "coma palomitas con tanta ansiedad que se le caiga medio bol al suelo del cine?",
      "confunda una fecha importante de un amigo o pareja por un día de diferencia?",
      "tenga la colección más grande de cables viejos que ya no sirven para ningún móvil?",
      "haga una encuesta por WhatsApp sobre una tontería que a nadie le importa?",
      "mire la hora en el móvil, lo guarde en el bolsillo y no sepa qué hora era?",
      "se equivoque de botón en el ascensor y acabe bajando al sótano o al garaje?",
      "finga que está leyendo un cartel para no tener que cruzar la mirada con nadie?",
      "pida un café descafeinado con leche de avena y sacarina y luego pida un croissant gigante?",
      "se coma el envoltorio de una magdalena o dulce por pura distracción?",
      "tenga el escritorio del ordenador repleto de capturas y archivos sin ordenar?",
      "salte de susto cuando alguien le toca la espalda sin avisar por detrás?",
      "haga una compra impulsiva de teletienda o anuncio de Instagram de madrugada?",
      "sea la persona que siempre propone hacerse una foto en grupo y luego no la pasa jamás?"
    ],
    fiesta: [
      "pierda el móvil, las llaves o las gafas en la primera hora de pisar la fiesta?",
      "proponga ir de after a las seis de la mañana cuando todos están completamente muertos?",
      "se haga íntimo amigo del portero o del relaciones públicas en menos de 5 minutos?",
      "acabe durmiendo en un banco de la plaza o en una esquina sin enterarse de nada?",
      "desaparezca de la discoteca sin decir una sola palabra a nadie (bomba de humo)?",
      "se gaste medio sueldo invitando a rondas de chupitos a absolutos desconocidos?",
      "se ponga nostálgico y llore en el baño diciendo que sois sus mejores amigos?",
      "se tropiece intentando hacer un paso de baile que vio en un vídeo motivado?",
      "pierda la chaqueta o abrigo y le eche la culpa a otra persona del grupo?",
      "cante reguetón viejo o rock clásico a grito pelado dejándose la voz entera?",
      "acabe con una prenda de ropa rota tras intentar saltar una valla o bordillo?",
      "se tome un chupito de golpe y se le salga por la nariz por toser del ardor?",
      "convenza a toda la cuadrilla para entrar a un bar infame que estaba vacío?",
      "acabe subido a una barra, mesa o escenario bailando con el personal?",
      "se beba el vaso de otro pensando que era el suyo sin saber qué contenía?",
      "le tire una copa entera encima al camarero o a un grupo de personas en la pista?",
      "acabe comiendo kebabs o hamburguesas a las 6 de la mañana sentado en la acera?",
      "haga fotos o vídeos vergonzosos de los demás y amenace con subirlos a redes?",
      "salga sin abrigo en pleno invierno diciendo que el alcohol quita el frío?",
      "acabe en la casa o bajera de desconocidos siguiendo una fiesta que no era suya?",
      "vuelva a casa descalzo con los zapatos en la mano diciendo que le matan los pies?",
      "intente colarse en la zona VIP de una discoteca fingiendo ser amigo del DJ?",
      "se pelee con un desconocido por defender a un amigo de una tontería absurda?",
      "acabe abrazando a la policía o al personal de seguridad diciéndoles que son unos héroes?",
      "se gaste todo el dinero en el taxi de vuelta a casa por vivir en las afueras?",
      "pierda las zapatillas en mitad del barro en unas fiestas patronales de pueblo?",
      "le pida al DJ la misma canción treinta veces durante toda la noche?",
      "tenga que ser llevado a cuestas por dos amigos para poder llegar a la cama?",
      "intente preparar una copa en la previa y eche el 90% de alcohol y el 10% de refresco?",
      "vomite en el portal antes de entrar a casa y tenga que limpiarlo de madrugada?",
      "se despierte al día siguiente con la ropa de fiesta puesta y los zapatos en la cama?",
      "haga un sinpa accidental pensando que su amigo ya había pagado la cuenta?",
      "se tire al suelo de rodillas fingiendo ser una estrella de rock en mitad del tema?",
      "intente ligar usando frases penosas de película romántica barata?",
      "pierda la cartera con todo el dinero y el DNI nada más empezar la noche?",
      "se quede encerrado en el baño portátil químico y empiece a aporrear la puerta?",
      "se gaste el dinero de las copas en la máquina de comida o de apuestas del bar?",
      "acabe cantando con la charanga o la orquesta del pueblo como si fuera del grupo?",
      "provoque que echen a todo el grupo de un local por una tontería suya?",
      "se beba los culos de las copas de la mesa al día siguiente por la mañana?",
      "tenga una resaca mortal que le dure tres días enteros en la cama sin comer?",
      "se equivoque de portal y de piso e intente meter su llave en la puerta de un vecino?",
      "robe una señal de tráfico, una valla o un cono de obra para llevárselo de recuerdo?",
      "acabe desayunando churros con chocolate con gente que va a misa de domingo?",
      "le confiese un secreto inconfesable a alguien de quien se arrepentirá al despertar?",
      "baile toda la noche con gafas de sol oscuras dentro del local cerrado?",
      "se caiga de culo al intentar sentarse en un taburete alto de la barra?",
      "haga una videollamada a su ex o a su jefe a las cinco de la mañana sin recordar nada?",
      "acabe empapado por tirarse o caerse a una fuente pública de noche?",
      "se duerma en el taxi de vuelta y el taxista no sepa en qué calle dejarle?",
      "quiera seguir de fiesta cuando ya han encendido las luces blancas del local?",
      "se meta en medio de un corro de baile a hacer el ridículo más absoluto?",
      "tenga moretones gigantes al día siguiente y no recuerde dónde se los hizo?",
      "pierda el coche en el aparcamiento al día siguiente y tarde una hora en encontrarlo?",
      "compre rosas o flores a los vendedores ambulantes de fiesta por pura insistencia?",
      "haga una apuesta ridícula con alcohol de por medio y la pierda de inmediato?",
      "intente hacer equilibrio sobre una barra o bordillo y termine en el suelo?",
      "se beba el chupito más picante o asqueroso de la carta solo por llamar la atención?",
      "tenga más anécdotas locas que parecen sacadas de la película Resacón en Las Vegas?",
      "se gaste cincuenta euros en chupitos para invitar a gente que acaba de saludar?",
      "robe vasos de cristal o ceniceros de la terraza para guardarlos en el bolso o abrigo?",
      "se ponga sentimental diciendo 'os juro que esta es la mejor noche de mi vida'?",
      "pierda una lentilla en mitad de la pista y obligue a todos a buscarla en el suelo?",
      "se coma la comida del desayuno de sus compañeros de piso sin avisarles?",
      "acabe subido a los hombros de otro y casi tire una lámpara o foco del techo?",
      "se ponga a cantar a capela en el autobús nocturno de vuelta a casa?",
      "intente entrar a un bar cuando ya están bajando la persiana diciendo que es un minuto?",
      "se beba un chupito con fuego y casi se queme las pestañas o el labio?",
      "acabe con una prenda de ropa prestada que jamás volverá a devolver a su dueño?",
      "haga amigos para toda la vida en la cola del baño y no los vuelva a ver jamás?",
      "se duerma apoyado en una columna de la discoteca de pie como si nada?",
      "intente pagar con la tarjeta del transporte público o del gimnasio en la barra?",
      "se coma un bocadillo entero en tres bocados por la ansiedad de alcohol?",
      "haga un brindis tan exagerado que rompa el cristal de su propio vaso?",
      "salga de fiesta prometiendo que se va a recoger a las dos y vuelva a las ocho?",
      "se ponga a discutir sobre fútbol o política a gritos con un desconocido a las 4 AM?",
      "pierda el móvil dentro de su propio abrigo o bolso y monte el drama de que se lo robaron?",
      "se tome un chupito de absenta o licor casero y empiece a toser como un condenado?",
      "tenga que pedirle dinero a un desconocido para poder pagar el último autobús?",
      "haga una bomba de humo y aparezca al día siguiente en un pueblo a 20 kilómetros?",
      "intente hacer una pirueta o salto mortal en la pista y acabe en el suelo plano?",
      "le dé su número de teléfono a alguien con un nombre totalmente falso?",
      "se gaste los últimos 5 euros que le quedaban en comprar una bolsa de pipas?",
      "acabe bailando el vals o pasodobles con los abuelos de la fiesta del pueblo?",
      "se coma un pimiento picante entero por una apuesta de bar?",
      "se quede afónico de cantar temazos de los años 2000 toda la noche?",
      "intente entrar en un local con el DNI de otra persona y le pillen al primer segundo?",
      "vuelva a casa con los bolsillos llenos de servilletas y tickets arrugados?",
      "haga un pacto de sangre con alguien de fiesta y al día siguiente ni se acuerde de su cara?",
      "acabe cuidando a tres borrachos a la vez siendo la única persona medio cuerda?",
      "pierda las llaves de casa y tenga que dormir en el felpudo o en el sofá de un amigo?",
      "intente robar un cono de tráfico y salga corriendo cuando escucha una sirena lejana?",
      "se compre un kebab y se le caiga entero al suelo nada más morderlo?",
      "salga a bailar en medio de una conga gigante con personas que no conoce?",
      "sea la primera persona en decir 'venga, pedimos otra ronda que invita la casa'?",
      "tenga fotos en el móvil de fiesta con personas que no tiene idea de quiénes son?",
      "se despierte al mediodía siguiente pensando que todavía son las ocho de la mañana?",
      "se invente que es famoso o influencer para conseguir mesa o descuentos en la discoteca?",
      "se gaste más dinero en comida basura a las 5 AM que en toda la noche de copas?",
      "sea el alma de la fiesta hasta que de repente se apaga como una bombilla y se duerme?"
    ],
    hot: [
      "acabe liándose con alguien en los primeros 20 minutos de pisar el local?",
      "le mande un 'te echo de menos' a su ex a las cuatro de la madrugada con copas encima?",
      "tenga una cuenta secreta en redes para cotillear los perfiles de todos sus ligues?",
      "se líe con el hermano/a o primo/a de un amigo si tuviera la ocasión perfecta?",
      "protagonice las historias de amor más telenoveleras, dramáticas y tóxicas?",
      "se vaya de la fiesta con alguien que acaba de conocer hace 10 minutos?",
      "acumule más mensajes y fotos picantes archivadas en carpetas secretas?",
      "proponga juegos de prendas, besos o retos atrevidos en cuanto hay confianza?",
      "se haya liado con alguien de quien ahora le dé auténtica vergüenza reconocer el nombre?",
      "tenga un fetiche o gusto inconfesable que jamás admitiría en público?",
      "mantenga una conversación caliente por mensaje mientras come con sus padres?",
      "se haya liado con dos personas del mismo grupo de amigos en diferente momento?",
      "tenga más citas de Tinder o apps similares en una sola semana?",
      "vuelva a caer en la cama con su ex después de haber jurado que jamás en la vida?",
      "tenga un encuentro íntimo en el baño de un local o en un callejón oscuro?",
      "deje marcas o chupetones visibles a propósito en el cuello de su ligue?",
      "tenga una lista secreta con la puntuación de todas las personas con las que ha estado?",
      "se líe con alguien solo para darle celos a otra persona que está en la misma sala?",
      "se escape por una ventana o puerta trasera para que no le pillen los padres de su ligue?",
      "haga el amor en un coche aparcado en un descampado o mirador?",
      "reciba más mensajes insinuantes a altas horas de la madrugada?",
      "sea capaz de fingir inocencia total cuando en realidad es la persona más ardiente?",
      "tenga una colección de juguetes íntimos guardados en su habitación?",
      "se haya liado con alguien diez años mayor o menor sin importarle lo más mínimo?",
      "tenga una fantasía inconfesable con un profesor, jefa o figura de autoridad?",
      "haga un striptease o baile sugerente si se lo piden en un juego de fiesta?",
      "tenga una cita que empiece para tomar un café y termine en un hotel en dos horas?",
      "sea pillado en pleno acto íntimo por un amigo o familiar por no cerrar la puerta?",
      "mande un mensaje caliente a la persona equivocada por un despiste de chat?",
      "se líe con un desconocido y jamás le vuelva a hablar en toda su vida?",
      "tenga una aventura secreta con alguien del trabajo o de la universidad?",
      "haya probado juegos íntimos con comida como nata, chocolate o hielo?",
      "se enamore perdidamente de una persona solo por lo bien que lo pasa en la cama con ella?",
      "tenga más ropa interior atrevida guardada para ocasiones de fiesta?",
      "haga sexting mientras está en clase o trabajando en una reunión seria?",
      "se líe con alguien solo por despecho para olvidar una ruptura dolorosa?",
      "tenga un lío de una noche en plenas vacaciones y se olvide de su nombre?",
      "bese con tanta pasión que le deje el labio hinchado o sangrando a su pareja?",
      "proponga jugar a la botella con el único objetivo de besar a su crush?",
      "tenga más conversaciones archivadas o con contraseña para que nadie las lea?",
      "haga una videollamada sugerente a altas horas de la noche con copas encima?",
      "tenga un 'amigo con derecho a roce' que sabe perfectamente que está enamorado de él/ella?",
      "tenga una fantasía recurrente con alguien que está sentado en esta misma mesa?",
      "haya tenido un encuentro apasionado en una piscina, río o en la playa?",
      "se bese con dos personas distintas en la misma noche de fiesta sin que se enteren?",
      "haya usado alguna vez un disfraz o juego de rol en la intimidad?",
      "haya tenido un sueño caliente con el novio/a de un amigo cercano?",
      "tenga más fotos sugerentes sin ropa guardadas en la papelera o nube secreta?",
      "haya tenido una cita solo porque la otra persona tenía un coche o casa increíble?",
      "se haya liado con el camarero/a o relaciones públicas tras cerrar el local?",
      "se líe con alguien en el cine en la última fila mientras proyectan la película?",
      "haya mentido sobre su experiencia en la cama para parecer mucho más experto?",
      "haya hecho un trío o le encantaría probarlo antes de que acabe el año?",
      "haya mordido a alguien en el cuello en plena pista de baile de una discoteca?",
      "tenga un romance prohibido que nadie de la cuadrilla sospecha?",
      "haya tenido que pedir ropa prestada al día siguiente porque la suya quedó destrozada?",
      "se ponga rojo al escuchar hablar de ciertas posturas o fetiches?",
      "haya mandado una foto provocativa desde el probador de una tienda de ropa?",
      "tenga más química con las personas que le caen mal que con las que le caen bien?",
      "haya hecho una llamada caliente de madrugada que duró más de dos horas?",
      "se haya liado con alguien en una tienda de campaña en un festival de música?",
      "tenga una lista de personas prohibidas con las que caería si tuviera la oportunidad?",
      "haya fingido estar dormido para evitar tener intimidad con su pareja?",
      "tenga un ligue extranjero con el que se comunicaba solo por señas y miradas?",
      "haya recibido una propuesta indecente a cambio de dinero o regalos caros?",
      "se haya liado con un amigo de la infancia y ahora la relación sea incomodísima?",
      "tenga más trucos seductores en la mirada cuando quiere conquistar a alguien?",
      "haya tenido que esconder a una persona en el armario porque llegaban sus padres?",
      "haya tenido un desliz con alguien a quien prometió odiar de por vida?",
      "tenga más fotos sugerentes de las que admitiría en un interrogatorio policial?",
      "haya probado literatura erótica o vídeos picantes para aprender trucos nuevos?",
      "haya tenido que lavarse la cara con agua helada para calmar las hormonas?",
      "se líe con alguien en un probador, ascensor o probador de centro comercial?",
      "haya tenido un flechazo inmediato en el metro que casi le hace perder la parada?",
      "haya tenido un amor de verano que le rompió el corazón en mil pedazos?",
      "haya dejado una marca de pintalabios en la ropa de alguien comprometido?",
      "tenga el instinto de seducción más peligroso y letal cuando sale de noche?",
      "haya tenido que cambiarse de camiseta porque tenía olor a perfume ajeno delator?",
      "se haya liado con alguien durante una fiesta mientras el resto dormía al lado?",
      "tenga un crush secreto con una persona que le duplica la edad?",
      "haya confesado sus fantasías más ocultas después de beberse dos chupitos?",
      "haya usado una excusa absurda para quedarse a dormir en casa de su ligue?",
      "tenga un chat secreto con mensajes temporales activados para no dejar rastro?",
      "se haya liado con alguien en una boda familiar en un descuido de los invitados?",
      "sea la persona con más armas de seducción de toda la cuadrilla?",
      "haya recibido una foto sin ropa de un desconocido por error o atrevimiento?",
      "tenga el récord de besos dados en un solo fin de semana de fiesta salvaje?",
      "se haya liado con su mejor amigo/a y luego hayan fingido que no pasó nada?",
      "haya tenido que morderse la lengua para no gemir o hacer ruido en una casa ajena?",
      "tenga la mirada más provocativa cuando empieza a sonar un reguetón lento?",
      "se haya arrepentido más de no haber dado el paso con alguien que de haberlo dado?",
      "haya mandado un mensaje de 'ven a mi casa que estoy solo' a las tres de la mañana?",
      "haya tenido un encuentro apasionado en un probador de ropa en plenas rebajas?",
      "tenga el historial de búsquedas nocturnas más ardiente del grupo?",
      "haya jugado a desvestirse prenda por prenda en una fiesta privada?",
      "se haya dejado llevar por la pasión en un parque o jardín público de noche?",
      "tenga la anécdota sexual más cómica, desastrosa y ridícula de la historia?",
      "se haya liado con alguien que no hablaba ni una sola palabra de su idioma?",
      "sea incapaz de decirle que no a su crush de toda la vida si le escribe hoy mismo?",
      "sea la persona que más peligro tiene si se queda a solas con alguien que le atrae?"
    ]
  },
  rouletteTasks: [
    "Tiene 30 segundos para enseñar la última foto de su galería o bebe 2 tragos.",
    "Elige a 2 personas de la mesa para que beban un trago largo con ella/él.",
    "Tiene que mandar un audio a cualquier contacto cantando un estribillo o beber 3 tragos.",
    "Intercambia una prenda u objeto con la persona de su derecha durante 2 rondas.",
    "Todos en la mesa le hacen una pregunta incómoda. Si no responde con la verdad, bebe un trago.",
    "Reparte 3 tragos entre los participantes como mejor prefiera.",
    "Se queda en silencio absoluto durante las próximas 3 tarjetas; si habla, bebe un trago.",
    "Imita a alguien de la mesa durante un minuto. Si nadie adivina quién es, bebe 2 tragos.",
    "Enseña las tres últimas búsquedas de su Instagram o TikTok o bebe 3 tragos.",
    "Llama a un contacto de su agenda y dile que te casas la semana que viene.",
    "Bebe tantos tragos como ex parejas o líos amorosos haya tenido este año.",
    "La persona a su izquierda le escribe un mensaje en Twitter o estado de WhatsApp.",
    "Bébete un chupito o trago entero con las manos a la espalda.",
    "Haz 10 flexiones seguidas o bebe 2 tragos dobles.",
    "Baila sin música durante 45 segundos delante de todos con total seriedad.",
    "Deja que la persona a tu derecha revise tus fotos eliminadas recientemente durante 15 segundos.",
    "Manda un selfie poniendo una mueca ridícula al tercer contacto de tus chats.",
    "Cuenta el secreto más vergonzoso que jamás le habías contado a este grupo.",
    "Confiesa a quién de los presentes besarías si fuera el fin del mundo.",
    "Habla con acento argentino, mexicano o francés hasta que te vuelva a tocar el turno.",
    "Bébete el vaso de la persona que tengas enfrente o invita a una ronda de chupitos.",
    "Mira fijamente a los ojos a la persona que elijas durante 1 minuto sin reírte. El primero que se ría, bebe.",
    "Lee en voz alta el último mensaje directo que hayas recibido en cualquier red social.",
    "Dile a la persona de tu izquierda qué es lo que más y lo que menos te gusta de ella.",
    "Bebe 1 trago por cada año que lleves con el móvil actual.",
    "Quítate un zapato y ponlo encima de la mesa hasta que termine la partida.",
    "Haz un brindis improvisado de un minuto dedicado a la peor persona que conozcas.",
    "Intenta adivinar el color de la ropa interior de tres personas de la mesa. Si fallas, bebe por cada error.",
    "Muestra la lista de alarmas matutinas que tienes en el móvil o bebe 2 tragos.",
    "Deja que alguien de la mesa te dibuje algo en el brazo con un boli.",
    "Pasa los próximos dos turnos dándole la mano a la persona que tengas a tu izquierda.",
    "Di tres virtudes y un defecto terrible de la persona que tienes enfrente.",
    "Muestra cuánto saldo tienes en tu cuenta bancaria o bebe 3 tragos seguidos.",
    "Dedícale un poema improvisado de rima consonante a la bebida que estás tomando.",
    "Bebe dos tragos largos ahora mismo sin pestañear por el bien del juego."
  ],
  bombTopics: [
    "Marcas de bebidas, licores o cócteles",
    "Excusas típicas para no salir de fiesta o cancelar un plan",
    "Ciudades del mundo que tengan playa",
    "Cosas que encuentras tiradas en el suelo de una discoteca",
    "Canciones míticas de reguetón o pop de fiesta que todos se saben",
    "Insultos graciosos o motes sin repetir",
    "Razones por las que te echarían de un local o discoteca",
    "Comidas sagradas para curar una resaca mortal",
    "Nombres de películas de Disney o dibujos animados",
    "Marcas famosas de coches o motos",
    "Cosas que llevas siempre en el bolso o en los bolsillos al salir",
    "Pueblos de España que conozcas o hayas visitado",
    "Deportes olímpicos o de aventura",
    "Tipos de tapas o raciones de bar"
  ]
};

// ESTADO GLOBAL
let currentScreen = 'screenHome';
let activeCardGame = 'yoNunca'; // 'yoNunca' | 'probable'
let currentLevel = 'fiesta';     // 'light' | 'fiesta' | 'hot'

let players = JSON.parse(localStorage.getItem('leza_players')) || ['Alex', 'Laura', 'Dani'];
let savedTheme = localStorage.getItem('leza_theme') || 'purple';

// Barajas sin repetición y aleatorias
let decks = {};

function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function getNextCardPhrase(game, level) {
  const key = `${game}_${level}`;
  // Si no existe la baraja o ya se mostraron todas las tarjetas, barajar de nuevo
  if (!decks[key] || decks[key].length === 0) {
    decks[key] = shuffle(DATABASE[game][level]);
  }
  return decks[key].pop();
}

function triggerHaptic() {
  if ('vibrate' in navigator) navigator.vibrate(35);
}

// ELEMENTOS DOM
const splashScreen = document.getElementById('splash-screen');
const brandHomeBtn = document.getElementById('brandHomeBtn');
const playerBadgeCount = document.getElementById('playerBadgeCount');
const homePlayerCounter = document.getElementById('homePlayerCounter');

// Pantallas
const screenHome = document.getElementById('screenHome');
const screenCards = document.getElementById('screenCards');
const screenRoulette = document.getElementById('screenRoulette');
const screenBomb = document.getElementById('screenBomb');
const allScreens = [screenHome, screenCards, screenRoulette, screenBomb];

// Elementos de Tarjeta
const mainGameCard = document.getElementById('mainGameCard');
const cardCategoryBadge = document.getElementById('cardCategoryBadge');
const cardPrefixText = document.getElementById('cardPrefixText');
const cardMainText = document.getElementById('cardMainText');
const cardRuleNote = document.getElementById('cardRuleNote');
const btnNextCard = document.getElementById('btnNextCard');

// Ruleta
const chosenVictim = document.getElementById('chosenVictim');
const chosenTask = document.getElementById('chosenTask');
const btnSpin = document.getElementById('btnSpin');

// Bomba
const bombEmoji = document.getElementById('bombEmoji');
const bombSubject = document.getElementById('bombSubject');
const bombFootnote = document.getElementById('bombFootnote');
const btnTriggerBomb = document.getElementById('btnTriggerBomb');
let bombTimer = null;

// Modales y formularios
const playersModal = document.getElementById('playersModal');
const btnOpenModal = document.getElementById('btnOpenModal');
const btnCloseModal = document.getElementById('btnCloseModal');
const formHomePlayer = document.getElementById('formHomePlayer');
const inputHomePlayer = document.getElementById('inputHomePlayer');
const homeChipsContainer = document.getElementById('homeChipsContainer');
const formModalPlayer = document.getElementById('formModalPlayer');
const inputModalPlayer = document.getElementById('inputModalPlayer');
const modalChipsList = document.getElementById('modalChipsList');

// Modal Novedades
const newsModal = document.getElementById('newsModal');
const btnOpenNews = document.getElementById('btnOpenNews');
const btnCloseNewsX = document.getElementById('btnCloseNewsX');
const btnDismissNewsForever = document.getElementById('btnDismissNewsForever');

// GESTOR DE TEMAS
function applyTheme(themeName) {
  document.body.setAttribute('data-theme', themeName);
  localStorage.setItem('leza_theme', themeName);

  document.querySelectorAll('.theme-dot').forEach(dot => {
    dot.classList.toggle('active', dot.dataset.color === themeName);
  });
}

document.querySelectorAll('.theme-dot').forEach(dot => {
  dot.addEventListener('click', () => {
    triggerHaptic();
    applyTheme(dot.dataset.color);
  });
});

// NAVEGACIÓN
function switchScreen(targetScreenId) {
  triggerHaptic();
  allScreens.forEach(s => s.classList.remove('active'));
  document.getElementById(targetScreenId).classList.add('active');
  currentScreen = targetScreenId;

  document.querySelectorAll('.nav-button').forEach(item => {
    item.classList.remove('active');
    if (item.dataset.target === targetScreenId) {
      if (targetScreenId === 'screenCards' && item.dataset.mode !== activeCardGame) {
        return;
      }
      item.classList.add('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// INICIAR DESDE LOBBY
document.querySelectorAll('.mode-card').forEach(card => {
  card.addEventListener('click', () => {
    const launchType = card.dataset.launch;

    if (launchType === 'yoNunca') {
      activeCardGame = 'yoNunca';
      updateCardGame();
      switchScreen('screenCards');
    } else if (launchType === 'probable') {
      activeCardGame = 'probable';
      updateCardGame();
      switchScreen('screenCards');
    } else if (launchType === 'roulette') {
      if (players.length === 0) {
        alert("Añade primero a alguien para que la ruleta pueda elegir una víctima.");
        inputHomePlayer.focus();
        return;
      }
      spinRoulette();
      switchScreen('screenRoulette');
    } else if (launchType === 'bomb') {
      switchScreen('screenBomb');
    }
  });
});

// TARJETAS
function updateCardGame() {
  triggerHaptic();
  const phrase = getNextCardPhrase(activeCardGame, currentLevel);
  const levelLabels = { light: 'LIGHT (100)', fiesta: 'FIESTA (100)', hot: 'HOT 🔥 (100)' };

  if (activeCardGame === 'yoNunca') {
    cardCategoryBadge.innerText = `YO NUNCA • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'Quien lo haya hecho, bebe un trago.';
  } else {
    cardCategoryBadge.innerText = `PROBABLE • ${levelLabels[currentLevel]}`;
    cardPrefixText.innerText = '¿Quién es más probable que...';
    cardMainText.innerText = phrase;
    cardRuleNote.innerText = 'A la de tres, todos señalan al mismo tiempo.';
  }
}

// SELECTOR DE NIVELES
document.querySelectorAll('.btn-level').forEach(btn => {
  btn.addEventListener('click', () => {
    triggerHaptic();
    document.querySelectorAll('.btn-level').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentLevel = btn.dataset.level;
    updateCardGame();
  });
});

// RULETA
function spinRoulette() {
  triggerHaptic();
  if (players.length === 0) {
    chosenVictim.innerText = "¡NADIE!";
    chosenTask.innerText = "Añade jugadores para activar la ruleta.";
    return;
  }
  const randomPerson = players[Math.floor(Math.random() * players.length)];
  const randomTask = DATABASE.rouletteTasks[Math.floor(Math.random() * DATABASE.rouletteTasks.length)];

  chosenVictim.innerText = randomPerson;
  chosenTask.innerText = randomTask;
}

// BOMBA
function startBomb() {
  triggerHaptic();
  if (bombTimer) clearTimeout(bombTimer);

  bombEmoji.innerText = '💣';
  bombEmoji.classList.add('shaking');
  const topic = DATABASE.bombTopics[Math.floor(Math.random() * DATABASE.bombTopics.length)];
  bombSubject.innerText = topic;
  bombFootnote.innerText = '¡Pasad el móvil rápido diciendo una palabra válida!';
  btnTriggerBomb.disabled = true;
  btnTriggerBomb.style.opacity = '0.5';

  const explosionDelay = Math.floor(Math.random() * 14000) + 10000;

  bombTimer = setTimeout(() => {
    bombEmoji.classList.remove('shaking');
    bombEmoji.innerText = '💥';
    bombSubject.innerText = "¡BOOOOOM!";
    bombFootnote.innerText = "¡El que tenga el móvil en la mano se bebe un trago entero!";
    btnTriggerBomb.disabled = false;
    btnTriggerBomb.style.opacity = '1';
    btnTriggerBomb.innerText = 'Activar Otra Bomba';
    if ('vibrate' in navigator) navigator.vibrate([200, 100, 200, 100, 400]);
  }, explosionDelay);
}

// EVENTOS DE BOTONES
btnNextCard.addEventListener('click', updateCardGame);
mainGameCard.addEventListener('click', updateCardGame);
btnSpin.addEventListener('click', spinRoulette);
btnTriggerBomb.addEventListener('click', startBomb);
brandHomeBtn.addEventListener('click', () => switchScreen('screenHome'));

// NAVEGACIÓN INFERIOR
document.querySelectorAll('.nav-button').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (btn.dataset.mode) {
      activeCardGame = btn.dataset.mode;
      updateCardGame();
    }
    switchScreen(target);
  });
});

// PARTICIPANTES
function syncPlayers() {
  localStorage.setItem('leza_players', JSON.stringify(players));
  playerBadgeCount.innerText = players.length;
  homePlayerCounter.innerText = `${players.length} personas`;

  homeChipsContainer.innerHTML = '';
  modalChipsList.innerHTML = '';

  if (players.length === 0) {
    const emptyMsg = '<p style="color:#8e97af;font-size:0.75rem;padding:6px 0;">No hay nadie añadido aún.</p>';
    homeChipsContainer.innerHTML = emptyMsg;
    modalChipsList.innerHTML = emptyMsg;
    return;
  }

  players.forEach((name, idx) => {
    const chipHome = document.createElement('span');
    chipHome.className = 'player-chip';
    chipHome.innerHTML = `<span>${name}</span><button onclick="removePlayer(${idx})">✕</button>`;
    homeChipsContainer.appendChild(chipHome);

    const chipModal = document.createElement('span');
    chipModal.className = 'player-chip';
    chipModal.innerHTML = `<span>${name}</span><button onclick="removePlayer(${idx})">✕</button>`;
    modalChipsList.appendChild(chipModal);
  });
}

window.removePlayer = function(index) {
  triggerHaptic();
  players.splice(index, 1);
  syncPlayers();
};

function addPlayerFromInput(inputElement) {
  const val = inputElement.value.trim();
  if (val) {
    players.push(val);
    inputElement.value = '';
    syncPlayers();
    triggerHaptic();
  }
}

formHomePlayer.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayerFromInput(inputHomePlayer);
});

formModalPlayer.addEventListener('submit', (e) => {
  e.preventDefault();
  addPlayerFromInput(inputModalPlayer);
});

btnOpenModal.addEventListener('click', () => {
  triggerHaptic();
  playersModal.style.display = 'flex';
});

btnCloseModal.addEventListener('click', () => {
  playersModal.style.display = 'none';
});

// GESTIÓN DEL MODAL DE NOVEDADES
function checkNewsUpdate() {
  const lastSeenVersion = localStorage.getItem('leza_news_seen_version');
  if (lastSeenVersion !== APP_VERSION) {
    // Si no ha visto esta versión, abrir modal automáticamente
    newsModal.style.display = 'flex';
  }
}

btnOpenNews.addEventListener('click', () => {
  triggerHaptic();
  newsModal.style.display = 'flex';
});

btnCloseNewsX.addEventListener('click', () => {
  newsModal.style.display = 'none';
});

btnDismissNewsForever.addEventListener('click', () => {
  triggerHaptic();
  localStorage.setItem('leza_news_seen_version', APP_VERSION);
  newsModal.style.display = 'none';
});

// INICIALIZACIÓN
window.addEventListener('DOMContentLoaded', () => {
  applyTheme(savedTheme);
  syncPlayers();
  updateCardGame();

  setTimeout(() => {
    splashScreen.style.opacity = '0';
    setTimeout(() => {
      splashScreen.style.visibility = 'hidden';
      checkNewsUpdate(); // Comprobar novedades tras el splash screen
    }, 450);
  }, 1400);
});
