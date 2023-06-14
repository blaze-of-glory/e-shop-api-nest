import { Injectable } from '@nestjs/common';
import { AboutUs } from "./interfaces/about-us.interface";

@Injectable()
export class AppService {
    public getAboutUsData(): AboutUs {
        return {
            id: '1',
            img: 'https://kirmash.by/images/sekcii/juv2/juv2_5.jpg',
            text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam, voluptates?'
        }
    }
}
