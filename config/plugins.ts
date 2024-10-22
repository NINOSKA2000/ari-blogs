// plugins.ts
module.exports = {
    // Otras configuraciones de plugins...
    
    'strapi-neon-tech-db-branches': {
      enabled: true, // Habilita el plugin
      config: {
        neonApiKey: "1yxyjbpyhsiejzd1wx7006569tz43w2y20hchyfe0dd93csadm5survmurdmwn61", // Tu API key de Neon
        neonProjectName: "db-strapi-post", // Nombre del proyecto en Neon donde corre tu base de datos
        neonRole: "bdpost_owner", // Rol creado manualmente en Neon bajo Roles
        gitBranch: "main" // Rama de git que puedes fijar con esta opción de configuración
      }
    },
  
    // Otras configuraciones de plugins...
  };
  