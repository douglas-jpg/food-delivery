import multer, { Multer, StorageEngine } from 'multer';
import { Request } from 'express';

// image storage engine
const storage: StorageEngine = multer.diskStorage({
    destination: 'uploads',
    filename: (
        req: Request,
        file: Express.Multer.File,
        cb: (error: Error | null, filename: string) => void
    ) => {
        // 432804823_nameFood.png
        return cb(null, `${Date.now()}_${file.originalname}`);
    },
});

export const upload: Multer = multer({
    storage: storage,
});
