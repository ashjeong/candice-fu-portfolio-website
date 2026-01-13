import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '../components/Card';
import projectsData from './projects.json';
import './Work.css';

// Dynamically import all images from assets folder
// FIX(ashjeong): Not the greatest solution. Created by ai. Please fix.
const images = import.meta.glob('../assets/**/*.{png,jpg,jpeg,svg,gif}', { eager: true });

// Helper function to get image from path in JSON
function getImageUrl(imagePath) {
  // Extract filename from path (e.g., "../assets/le-petit.png" -> "le-petit.png")
  const filename = imagePath.split('/').pop();

  // Find matching image by filename
  const imageEntry = Object.entries(images).find(([path]) =>
    path.endsWith(filename)
  );

  // Return the default export (the image URL) if found, otherwise return original path
  return imageEntry ? imageEntry[1].default : imagePath;
}

function ResponsiveGrid() {
  return (
    <Box sx={{ flexGrow: 1 }} className="work-container">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 2, md: 8, xl: 12 }}>
        {projectsData.map((project, index) => (
          <Grid key={index} size={{ sm: 2, md: 4, xl: 4 }}>
            <Card
              title={project.title}
              description={project.description}
              imageUrl={getImageUrl(project['image-url'])}
              tags={project.tags}
              backgroundColor={project.backgroundColor}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}


function Work() {

  return (
    <>
      <ResponsiveGrid />
    </>
  );
}

export default Work;
