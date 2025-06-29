/// <reference path="./node_modules/@nativescript/types/index.d.ts" />

declare class AI extends NSObject {

	static alloc(): AI; // inherited from NSObject

	static new(): AI; // inherited from NSObject

	static readonly shared: AI;

	streamResponseFor(prompt: string, completion: (p1: string) => void): void;
}