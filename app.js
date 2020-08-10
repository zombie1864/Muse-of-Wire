const express = require('express'); 
const app = express(); 

app.use('api/videos', videos); 

const port = process.env.PORT || 5000; 
app.listen(port, () => console.log(`Server is running on port ${port}`))