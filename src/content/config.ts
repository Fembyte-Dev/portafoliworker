// Define el esquema para las colecciones de contenido
import { z, defineCollection } from 'astro:content';

// Define el esquema para la colección de proyectos
const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    descricionCorta: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    image: z.string(),
    links: z.object({
      github: z.string(),
      demo: z.string().nullable()
    })
  })
});

// Exporta las colecciones
export const collections = {
  'projects': projectsCollection
};