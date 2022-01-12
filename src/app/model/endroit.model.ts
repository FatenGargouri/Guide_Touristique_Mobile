export interface Endroit
{
    title: string;
    city?: string;
    country?: string;
    keyWords? : string;
    timestamp?: number;
    coordinates?: {
        longitude: number;
        latitude: number;
    };
    photos?: string[];
}