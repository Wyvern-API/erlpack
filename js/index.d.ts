declare module '@wyvern/erlpack' {
	export function pack(data: any): Buffer;
	export function unpack(data: Buffer): any; 
}
