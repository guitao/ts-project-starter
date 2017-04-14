declare var require: {
    <T>(path: string): T;
    (paths: string[], callback: (...modules: any[]) => void): void;
    ensure: (paths: string[], callback: (require: <T>(path: string) => T) => void) => void;
};

interface ImageInfo {
    width: number;
    height: number;
    src: string;
    type: string;
    bytes: number;

}