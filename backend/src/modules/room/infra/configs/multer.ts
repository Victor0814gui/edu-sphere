import multer from "multer"
import path from "path";





const config = multer({
  dest: "./tmp",
  storage: multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./tmp");
    },
    filename: (req, file, callback) => {
      const extname = path.extname(file.originalname);
      const basename = path.basename(file.originalname, extname);
      callback(null, `${basename}-${Date.now()}${extname}`);
    }
  })
})

const filesConfig = { name: 'files', maxCount: 1 }

export {
  config,
  filesConfig,
}