// Exportamos por defecto la clase Lore
export default class Lore {
    // Constructor que recibe como parámetro data que contiene los datos del campeón que obtenemos desde la API
    constructor(data) {
        this.name = data.name;                      // Nombre del campeón
        this.id = data.id;                          // Id del campeón
        this.title = data.title;                    // Título del campeón
        this.image = data.image.full;               // Imagen principal del campeón
        this.tags = data.tags;                      // Roles del campeón (Devuelve un array)
        this.info=data.info;                        // Información del campeón
        this.stats = data.stats;                    // Estadísticas base del campeón
        this.partype = data.partype;                // Tipo de recurso (maná, energía, etc.)
        this.blurb = data.blurb;                    // Descripción breve del campeón
    }
}
