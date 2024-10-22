module.exports = {
    // Otras configuraciones de plugins...
    
    'strapi-neon-tech-db-branches': {
      enabled: true, // Habilita el plugin
      config: {
        neonApiKey: process.env.NEON_API_KEY, // Tu API key de Neon
        neonProjectName: process.env.NEON_PROJECT_NAME, // Nombre del proyecto en Neon donde corre tu base de datos
        neonRole: process.env.NEON_ROLE, // Rol creado manualmente en Neon bajo Roles
        gitBranch: process.env.GIT_BRANCH // Rama de git que puedes fijar con esta opción de configuración
      }
    },
    
    // Otras configuraciones de plugins...
  };
  