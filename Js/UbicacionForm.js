class UbicacionForm {
    constructor() {
        this.paises = ["México", "España"];
        this.estados = {
            "México": ["Ciudad de México", "Nuevo León"],
            "España": ["Madrid", "Barcelona"],
            
        };
        this.municipios = {
            "Ciudad de México": ["Benito Juárez", "Coyoacán", "Miguel Hidalgo"],
            "Nuevo León": ["Monterrey", "San Pedro Garza García", "Guadalupe"],
            

            "Madrid": ["Alcalá de Henares", "Alcobendas", "Alcorcón" ],
            "Barcelona": ["Badalona", "Badia del Vallès", "Barberà del Vallès"],
            
        };
        this.localidades = {
            "Benito Juárez": ["Colonia del Valle", "Napoles", "Del Valle"],
            "Coyoacán": ["Coyoacán Centro", "Los Olivos", "Churubusco"],
            "Miguel Hidalgo": ["Polanco", "Anzures", "Lomas de Chapultepec"],

            "Monterrey": ["San Nicolás de los Garza","San Pedro Garza García","Santa Catarina"],
            "San Pedro Garza García": ["Cadereyta Jiménez","General Bravo", "General Terán"],
            "Guadalupe": ["El Gran Chaparral", "El Ranchito Número Uno", "El Crucero"],

            "Alcalá de Heneres": ["AMBITE","CAMPO REAL","MECO"],
            "Alcobendas":["Rincon de la Granja","San Sebastián de los Reyes","Valdefuentes"],
            "Alcorcón": ["Colonia Los Pocillos","El Olivar", "Virgen del Puerto"],

            "Badalona": ["Hospitalet de Llobregat","Sant Adrià de Besòs","Santa Coloma de Gramenet"],
            "Badia del Vallès": ["Ciudad Badía", "Vallès Occidental ","Cataluña"],
            "Barberà del Vallès": ["Sardañola del Vallés","Ripollet", "San Quirico de Tarrasa"]

        };
    }

    cargarPaises() {
        const paisSelect = document.getElementById("pais");

        this.paises.forEach((pais) => {
            const option = document.createElement("option");
            option.value = pais;
            option.text = pais;
            paisSelect.add(option);
        });
    }

    cargarEstados() {
        const paisSeleccionado = document.getElementById("pais").value;
        const estadosSelect = document.getElementById("estado");
        const municipiosSelect = document.getElementById("municipio");
        const localidadesSelect = document.getElementById("localidad");

        // Limpiar las opciones anteriores
        estadosSelect.innerHTML = "";
        municipiosSelect.innerHTML = "";
        localidadesSelect.innerHTML = "";

        // Llenar los estados
        this.estados[paisSeleccionado].forEach((estado) => {
            const option = document.createElement("option");
            option.value = estado;
            option.text = estado;
            estadosSelect.add(option);
        });
    }

    cargarMunicipios() {
        const paisSeleccionado = document.getElementById("pais").value;
        const estadoSeleccionado = document.getElementById("estado").value;
        const municipiosSelect = document.getElementById("municipio");
        const localidadesSelect = document.getElementById("localidad");

        municipiosSelect.innerHTML = "";
        localidadesSelect.innerHTML = "";

        this.municipios[estadoSeleccionado].forEach((municipio) => {
            const option = document.createElement("option");
            option.value = municipio;
            option.text = municipio;
            municipiosSelect.add(option);
        });
    }

    cargarLocalidades() {
        const estadoSeleccionado = document.getElementById("estado").value;
        const municipioSeleccionado = document.getElementById("municipio").value;
        const localidadesSelect = document.getElementById("localidad");

        localidadesSelect.innerHTML = "";

        this.localidades[municipioSeleccionado].forEach((localidad) => {
            const option = document.createElement("option");
            option.value = localidad;
            option.text = localidad;
            localidadesSelect.add(option);
        });
    }
 }
//  se crea una instancia de esta clase para su uso 
const ubicacionForm = new UbicacionForm();
