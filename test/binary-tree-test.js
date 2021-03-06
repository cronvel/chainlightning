/*
	Chain Lightning

	Copyright (c) 2018 - 2020 Cédric Ronvel

	The MIT License (MIT)

	Permission is hereby granted, free of charge, to any person obtaining a copy
	of this software and associated documentation files (the "Software"), to deal
	in the Software without restriction, including without limitation the rights
	to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
	copies of the Software, and to permit persons to whom the Software is
	furnished to do so, subject to the following conditions:

	The above copyright notice and this permission notice shall be included in all
	copies or substantial portions of the Software.

	THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
	AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
	LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
	OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
	SOFTWARE.
*/

"use strict" ;

/* global describe, it, before, after */



const lib = require( '..' ) ;
const BinaryTree = lib.BinaryTree ;





			/* Tests */



describe( "Binary Tree" , () => {

	describe( "Basic features" , () => {
		
		it( "constructor arguments should be added as elements" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			tree.sanityCheck() ;

			tree = new BinaryTree( null , 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' ] ) ;
			tree.sanityCheck() ;
		} ) ;
		
		it( "BinaryTree.from() should create a tree from any iterable" , () => {
			var tree ;
			
			tree = BinaryTree.from( new Set() ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = BinaryTree.from( new Set( [ 'jack' ] ) ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree = BinaryTree.from( new Set( [ 'jack' , 'jean' , 'steve' ] ) ) ;
			tree.sanityCheck() ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
		} ) ;
		
		it( ".values(), .keys() and iterator" , () => {
			var tree ;
			
			tree = new BinaryTree( { stack: true } ) ;
			
			tree.set( 3 , 'jack' ) ;
			tree.set( 2 , 'jean' ) ;
			tree.set( 5 , 'steve' ) ;
			tree.set( 2.5 , 'john' ) ;
			tree.set( 2.7 , 'robert' ) ;
			tree.set( 2.8 , 'johnson' ) ;
			tree.set( 2.75 , 'boris' ) ;
			tree.set( 6 , 'bobby' ) ;
			tree.set( 2.85 , 'carl' ) ;
			tree.set( 2.72 , 'tom' ) ;
			tree.set( 2.76 , 'roger' ) ;
			tree.set( 2.77 , 'vlad' ) ;
			tree.add( 6 , 'bob' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'johnson' , 'carl' , 'jack' , 'steve' , 'bobby' , 'bob' ] ) ;
			expect( tree.keys() ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			expect( [ ... tree.values() ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'johnson' , 'carl' , 'jack' , 'steve' , 'bobby' , 'bob' ] ) ;
		} ) ;
		
		it( "set and get elements" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			
			// Try getting unexisting keys
			expect( tree.get( 0 ) ).to.be( undefined ) ;
			expect( tree.get( 9 ) ).to.be( undefined ) ;
			
			tree.set( 3 , 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 2 , 'jean' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 5 , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 2.5 , 'john' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 2.7 , 'robert' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			// Force a left-right heavy
			tree.set( 2.8 , 'johnson' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'johnson' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 2.75 , 'boris' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'boris' , 'johnson' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 6 , 'bobby' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'boris' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			tree.sanityCheck() ;
			
			tree.set( 2.85 , 'carl' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'boris' , 'johnson' , 'carl' , 'jack' , 'steve' , 'bobby' ] ) ;
			tree.sanityCheck() ;
			
			// Force a right-left heavy
			tree.set( 2.72 , 'tom' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'tom' , 'boris' , 'johnson' , 'carl' , 'jack' , 'steve' , 'bobby' ] ) ;
			tree.sanityCheck() ;
			
			//tree.debug() ;

			expect( tree.get( 3 ) ).to.be( 'jack' ) ;
			expect( tree.get( 2 ) ).to.be( 'jean' ) ;
			expect( tree.get( 5 ) ).to.be( 'steve' ) ;
			expect( tree.get( 2.5 ) ).to.be( 'john' ) ;
			expect( tree.get( 2.7 ) ).to.be( 'robert' ) ;
			expect( tree.get( 2.8 ) ).to.be( 'johnson' ) ;
			expect( tree.get( 2.75 ) ).to.be( 'boris' ) ;
			expect( tree.get( 6 ) ).to.be( 'bobby' ) ;
			expect( tree.get( 2.85 ) ).to.be( 'carl' ) ;
			expect( tree.get( 2.72 ) ).to.be( 'tom' ) ;

			// Try getting unexisting keys
			expect( tree.get( 0 ) ).to.be( undefined ) ;
			expect( tree.get( 9 ) ).to.be( undefined ) ;
		} ) ;
		
		it( "add and get elements in conjunction with the 'stack' option" , () => {
			var tree ;
			
			tree = new BinaryTree( { stack: true } ) ;
			
			// Try getting unexisting keys
			expect( tree.get( 0 ) ).to.be( undefined ) ;
			expect( tree.get( 9 ) ).to.be( undefined ) ;
			
			tree.add( 3 , 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 2 , 'jean' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'jack' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 5 , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 2.5 , 'john' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 2.7 , 'robert' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'jack' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 3 , 'bobby' ) ;
			expect( [ ... tree ] ).to.be.like( [ 'jean' , 'john' , 'robert' , 'jack' , 'bobby' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 2 , 'jeanjean' ) ;
			expect( [ ... tree ] ).to.be.like( [ 'jean' , 'jeanjean' , 'john' , 'robert' , 'jack' , 'bobby' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree.add( 2 , 'jeanjeanjean' ) ;
			expect( [ ... tree ] ).to.be.like( [ 'jean' , 'jeanjean' , 'jeanjeanjean' , 'john' , 'robert' , 'jack' , 'bobby' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			//tree.debug() ;

			expect( tree.get( 3 ) ).to.be.a( BinaryTree.Stack ) ;
			expect( tree.get( 3 ) ).to.be.like( [ 'jack' , 'bobby' ] ) ;
			expect( tree.get( 2 ) ).to.be.a( BinaryTree.Stack ) ;
			expect( tree.get( 2 ) ).to.be.like( [ 'jean' , 'jeanjean' , 'jeanjeanjean' ] ) ;
			expect( tree.get( 5 ) ).to.be( 'steve' ) ;
			expect( tree.get( 2.5 ) ).to.be( 'john' ) ;
			expect( tree.get( 2.7 ) ).to.be( 'robert' ) ;

			// Try getting unexisting keys
			expect( tree.get( 0 ) ).to.be( undefined ) ;
			expect( tree.get( 9 ) ).to.be( undefined ) ;
		} ) ;
		
		it( ".insert()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( tree ).to.have.length( 0 ) ;
			
			tree.insert( 'bob' ) ;
			tree.insert( 'bill' ) ;
			tree.insert( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'bob' , 'bill' , 'jack' , 'jean' , 'steve' ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree() ;
			tree.insert( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			tree.sanityCheck() ;
		} ) ;

		it( ".insertUnique()" ) ;

		it( "delete by key" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			tree.set( 3 , 'jack' ) ;
			tree.delete( 3 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree() ;
			tree.set( 3 , 'jack' ) ;
			tree.set( 2 , 'jean' ) ;
			tree.delete( 3 ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' ] ) ;
			tree.sanityCheck() ;
			tree.delete( 2 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree() ;
			
			tree.set( 3 , 'jack' ) ;
			tree.set( 2 , 'jean' ) ;
			tree.set( 5 , 'steve' ) ;
			tree.set( 2.5 , 'john' ) ;
			tree.set( 2.7 , 'robert' ) ;
			tree.set( 2.8 , 'johnson' ) ;
			tree.set( 2.75 , 'boris' ) ;
			tree.set( 6 , 'bobby' ) ;
			tree.set( 2.85 , 'carl' ) ;
			tree.set( 2.72 , 'tom' ) ;
			tree.set( 2.76 , 'roger' ) ;
			tree.set( 2.77 , 'vlad' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'johnson' , 'carl' , 'jack' , 'steve' , 'bobby' ] ) ;
			tree.sanityCheck() ;
			
			//console.log( '\n\nTree:' ) ; tree.debug() ;
			
			// Delete a leaf and force a left-right heavy
			tree.delete( 2.85 ) ;
			tree.sanityCheck() ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'john' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.get( 2.85 ) ).to.be( undefined ) ;
			
			// Delete a node with only one child
			tree.delete( 2.5 ) ;
			tree.sanityCheck() ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.get( 2.5 ) ).to.be( undefined ) ;
			
			// Delete a node with only two children that are not leaves
			tree.delete( 2.8 ) ;
			tree.sanityCheck() ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'robert' , 'tom' , 'boris' , 'roger' , 'vlad' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.get( 2.8 ) ).to.be( undefined ) ;
			
			// Delete the trunc node, the tree should replace the trunc node, it also cause a right heavy
			tree.delete( 2.75 ) ;
			tree.sanityCheck() ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'robert' , 'tom' , 'roger' , 'vlad' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.get( 2.75 ) ).to.be( undefined ) ;
			
			//tree.debug() ;
		} ) ;
		
	} ) ;
		
	describe( "Advanced Array-like features" , () => {
		
		it( ".keyOf()/.lastKeyOf()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.keyOf( e2 ) ).to.be( 1 ) ;
			expect( tree.keyOf( e4 ) ).to.be( undefined ) ;
			
			tree.insert( e2 , e2 , e2 ) ;
			tree.set( tree.keyOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ { v: 'jack' } , { v: 'bobby' } , { v: 'steve' } , { v: 'bob' } , { v: 'bob' } , { v: 'bob' } ] ) ;
			tree.set( tree.lastKeyOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ { v: 'jack' } , { v: 'bobby' } , { v: 'steve' } , { v: 'bob' } , { v: 'bob' } , { v: 'bobby' } ] ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e1 ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 4 , e1 ) ;
			tree.add( 4 , e2 ) ;
			tree.add( 4.5 , e3 ) ;
			expect( tree.keyOf( e1 ) ).to.be( 2 ) ;
			expect( tree.keyOf( e2 ) ).to.be( 2 ) ;
			expect( tree.keyOf( e3 ) ).to.be( 2.5 ) ;
			expect( tree.keyOf( e4 ) ).to.be( undefined ) ;
			expect( tree.lastKeyOf( e1 ) ).to.be( 4 ) ;
			expect( tree.lastKeyOf( e2 ) ).to.be( 4 ) ;
			expect( tree.lastKeyOf( e3 ) ).to.be( 4.5 ) ;
			expect( tree.lastKeyOf( e4 ) ).to.be( undefined ) ;
		} ) ;

		it( ".includes()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree() ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e1 ) ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e1 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e2 , e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e1 , e3 , e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e2 , e1 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e1 ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			expect( tree.includes( e1 ) ).to.be.true() ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			expect( tree.includes( e3 ) ).to.be.true() ;
			expect( tree.includes( e4 ) ).to.be.false() ;
		} ) ;

		it( ".forEach()" , () => {
			var tree , values , keys ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			keys = [] ;
			values = [] ;
			tree = new BinaryTree() ;
			tree.forEach( element => values.push( element.v ) ) ;
			expect( values ).to.equal( [] ) ;
			
			keys = [] ;
			values = [] ;
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			tree.forEach( element => values.push( element.v ) ) ;
			expect( values ).to.equal( [ 'jack' , 'bob' , 'steve' ] ) ;
			
			keys = [] ;
			values = [] ;
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e1 ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 2.5 , e1 ) ;
			tree.add( 2.2 , e2 ) ;
			tree.forEach( ( element , key ) => { keys.push( key ) ; values.push( element.v ) ; } ) ;
			expect( keys ).to.equal( [ 2 , 2 , 2.2 , 2.5 , 2.5 , 2.5 ] ) ;
			expect( values ).to.equal( [ 'jack' , 'bob' , 'bob' , 'steve' , 'steve' , 'jack' ] ) ;
		} ) ;

		it( ".some()/.every()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e1 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
			
			tree = new BinaryTree( null , e1 , e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e2 , e1 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e1 , e2 , e2 , e3 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( null , e2 , e2 , e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			expect( tree.some( element => element.v === 'jack' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'jack' ) ).to.be.false() ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.some( element => element.v === 'steve' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'steve' ) ).to.be.false() ;
			tree.add( 2 , e1 ) ;
			expect( tree.some( element => element.v === 'jack' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'jack' ) ).to.be.false() ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			expect( tree.some( element => element.v === 'steve' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'steve' ) ).to.be.false() ;
		} ) ;
		
		it( ".find()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bob' } ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e2 ) ;
			expect( tree.find( element => element.v === 'bobby' ) ).to.be( undefined ) ;
			
			tree.insert( e4 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e2 ) ;
			
			tree.delete( 1 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e4 ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 1 , e1 ) ;
			expect( tree.find( element => element.v === 'jack' ) ).to.be( e1 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e2 ) ;
			expect( tree.find( element => element.v === 'steve' ) ).to.be( undefined ) ;
		} ) ;
		
		it( ".findKey()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bob' } ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.findKey( element => element.v === 'bob' ) ).to.be( 1 ) ;
			expect( tree.findKey( element => element.v === 'bobby' ) ).to.be( undefined ) ;
			expect( tree.findKey( element => element.v === 'bobby' ) ).to.be( undefined ) ;
			
			tree.insert( e4 ) ;
			expect( tree.findKey( element => element.v === 'bob' ) ).to.be( 1 ) ;
			
			tree.delete( 1 ) ;
			expect( tree.findKey( element => element.v === 'bob' ) ).to.be( 3 ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 1 , e1 ) ;
			expect( tree.findKey( element => element.v === 'jack' ) ).to.be( 1 ) ;
			expect( tree.findKey( element => element.v === 'bob' ) ).to.be( 2 ) ;
			expect( tree.findKey( element => element.v === 'steve' ) ).to.be( undefined ) ;
		} ) ;
		
		it( ".map() (or alias .arrayMap())" , () => {
			var tree , array ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			array = new BinaryTree( null ).map( element => element.v + element.v ) ;
			expect( array ).to.equal( [] ) ;
			
			array = new BinaryTree( null , e1 ).arrayMap( element => element.v + element.v ) ;
			expect( array ).to.equal( [ 'jackjack' ] ) ;
			
			array = new BinaryTree( null , e1 , e2 , e3 ).arrayMap( element => element.v + element.v ) ;
			expect( array ).to.equal( [ 'jackjack' , 'bobbob' , 'stevesteve' ] ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 1 , e1 ) ;
			array = tree.map( element => element.v + element.v ) ;
			expect( array ).to.equal( [ 'jackjack' , 'bobbob' , 'stevesteve' , 'bobbob' ] ) ;
		} ) ;
		
		it( ".reduce()/.reduceRight" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( '' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( '' ) ;
			
			tree = new BinaryTree( null , e1 ) ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jack' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jack' ) ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jackbobsteve' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'stevebobjack' ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 1 , e1 ) ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jackbobstevebob' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'bobstevebobjack' ) ;
		} ) ;
		
		it( ".filter() (or alias .arrayFilter())" , () => {
			var tree , array ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			array = new BinaryTree().filter( element => element.v.length >= 4 ) ;
			expect( array ).to.equal( [] ) ;
			
			array = new BinaryTree( null , e1 ).filter( element => element.v.length >= 4 ) ;
			expect( array ).to.equal( [ e1 ] ) ;
			
			array = new BinaryTree( null , e1 ).filter( element => element.v.length < 4 ) ;
			expect( array ).to.equal( [] ) ;
			
			array = new BinaryTree( null , e1 , e2 , e3 ).filter( element => element.v.length >= 4 ) ;
			expect( array ).to.equal( [ e1 , e3 ] ) ;
			
			array = new BinaryTree( null , e1 , e3 ).filter( element => element.v.length >= 4 ) ;
			expect( array ).to.equal( [ e1 , e3 ] ) ;
			
			array = new BinaryTree( null , e2 , e2 , e2 ).filter( element => element.v.length >= 4 ) ;
			expect( array ).to.equal( [] ) ;
			
			array = new BinaryTree( null , e1 , e2 , e3 ).filter( element => element.v.length < 4 ) ;
			expect( array ).to.equal( [ e2 ] ) ;


			// Stack
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 2 , e2 ) ;
			tree.add( 2.5 , e3 ) ;
			tree.add( 2.5 , e2 ) ;
			tree.add( 1 , e1 ) ;
			expect( tree.filter( element => element.v.length < 4 ) ).to.equal( [ e2 , e2 ] ) ;
			expect( tree.filter( element => element.v.length > 4 ) ).to.equal( [ e3 ] ) ;
			expect( tree.filter( element => element.v.length <= 4 ) ).to.equal( [ e1 , e2 , e2 ] ) ;
			expect( tree.filter( element => element.v.length >= 4 ) ).to.equal( [ e1 , e3 ] ) ;
		} ) ;

		it( ".slice() (or alias .arraySlice())" , () => {
			var tree ;
			
			var reset = () => {
				tree = new BinaryTree( { stack: true } ) ;
				tree.add( 3 , 'jack' ) ;
				tree.add( 2 , 'jean' ) ;
				tree.add( 5 , 'steve' ) ;
				tree.add( 2.5 , 'john' ) ;
				tree.add( 2.7 , 'robert' ) ;
				tree.add( 2.8 , 'johnson' ) ;
				tree.add( 6 , 'bobby' ) ;
				tree.add( 2.7 , 'robert2' ) ;
				tree.add( 2.7 , 'robert3' ) ;
			} ;
			
			reset() ;
			expect( tree.slice( -1 , 10 ) ).to.equal( [ 'jean' , 'john' , 'robert' , 'robert2' , 'robert3' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.slice( 2 , 6 ) ).to.equal( [ 'jean' , 'john' , 'robert' , 'robert2' , 'robert3' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.slice( 3 , 5 ) ).to.equal( [ 'jack' , 'steve' ] ) ;
			expect( tree.slice( 3 , 3 ) ).to.equal( [ 'jack' ] ) ;
			expect( tree.slice( 3 , 2 ) ).to.equal( [] ) ;
			expect( tree.slice( 30 , 40 ) ).to.equal( [] ) ;

			expect( tree.slice( -1 , 10 , false ) ).to.equal( [ 'jean' , 'john' , 'robert' , 'robert2' , 'robert3' , 'johnson' , 'jack' , 'steve' , 'bobby' ] ) ;
			expect( tree.slice( 2 , 6 , false ) ).to.equal( [ 'john' , 'robert' , 'robert2' , 'robert3' , 'johnson' , 'jack' , 'steve' ] ) ;
			expect( tree.slice( 3 , 5 , false ) ).to.equal( [] ) ;
			expect( tree.slice( 3 , 3 , false ) ).to.equal( [] ) ;
			expect( tree.slice( 3 , 2 , false ) ).to.equal( [] ) ;
			expect( tree.slice( 30 , 40 , false ) ).to.equal( [] ) ;
		} ) ;
	} ) ;

	describe( "Advanced custom features" , () => {
		
		it( ".deleteValue() (and alias .removeValue())" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ) ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree() ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e2 ) ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e2 , e1 , e3 ) ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e1 , e3 , e2 ) ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			// Remove all occurences
			tree = new BinaryTree( null , e2 , e2 , e2 , e1 , e2 , e3 , e2 ) ;
			tree.deleteValue( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			// NaN test
			tree = new BinaryTree( null , NaN , NaN , NaN , e1 , NaN , e3 , NaN ) ;
			tree.deleteValue( NaN ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			// Stacked values
			tree = new BinaryTree( { stack: true } ) ;
			tree.add( 1 , e1 ) ;
			tree.add( 1 , e4 ) ;
			tree.add( 2 , e1 ) ;
			tree.add( 3 , e2 ) ;
			tree.add( 3 , e1 ) ;
			tree.add( 3 , e3 ) ;
			tree.add( 4 , e4 ) ;

			//tree.debugValues() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e4 , e1 , e2 , e1 , e3 , e4 ] ) ;
			tree.deleteValue( e1 ) ;
			//tree.debugValues() ;
			expect( [ ... tree ] ).to.equal( [ e4 , e2 , e3 , e4 ] ) ;
			tree.sanityCheck() ;
		} ) ;
		
		it( ".inPlaceFilter()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree( null , e2 , e2 , e2 ) ;
			expect( tree.inPlaceFilter( () => true ) ).to.be( tree ) ;
			
			tree = new BinaryTree().inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e1 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( true , e1 ).inPlaceFilter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e1 , e3 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e2 , e2 , e2 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			
			tree = new BinaryTree( null , e1 , e2 , e3 ).inPlaceFilter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e2 ] ) ;
			tree.sanityCheck() ;
		} ) ;

		it( ".truncateBefore()" , () => {
			var tree ;
			
			var reset = () => {
				tree = new BinaryTree() ;
				tree.set( 3 , 'jack' ) ;
				tree.set( 2 , 'jean' ) ;
				tree.set( 5 , 'steve' ) ;
				tree.set( 2.5 , 'john' ) ;
				tree.set( 2.7 , 'robert' ) ;
				tree.set( 2.8 , 'johnson' ) ;
				tree.set( 2.75 , 'boris' ) ;
				tree.set( 6 , 'bobby' ) ;
				tree.set( 2.85 , 'carl' ) ;
				tree.set( 2.72 , 'tom' ) ;
				tree.set( 2.76 , 'roger' ) ;
				tree.set( 2.77 , 'vlad' ) ;
			} ;
			
			reset() ;
			tree.truncateBefore( 1 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 1 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
			
			reset() ;
			tree.truncateBefore( 2 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
			
			reset() ;
			tree.truncateBefore( 2.72 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.72 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.73 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.73 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.8 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.8 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.85 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.85 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.9 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 2.9 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 4 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 4 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 5 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 5 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 6 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 6 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 7 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateBefore( 7 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
		} ) ;
	
		it( ".truncateAfter()" , () => {
			var tree ;
			
			var reset = () => {
				tree = new BinaryTree() ;
				tree.set( 3 , 'jack' ) ;
				tree.set( 2 , 'jean' ) ;
				tree.set( 5 , 'steve' ) ;
				tree.set( 2.5 , 'john' ) ;
				tree.set( 2.7 , 'robert' ) ;
				tree.set( 2.8 , 'johnson' ) ;
				tree.set( 2.75 , 'boris' ) ;
				tree.set( 6 , 'bobby' ) ;
				tree.set( 2.85 , 'carl' ) ;
				tree.set( 2.72 , 'tom' ) ;
				tree.set( 2.76 , 'roger' ) ;
				tree.set( 2.77 , 'vlad' ) ;
			} ;
			
			reset() ;
			tree.truncateAfter( 1 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 1 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
			
			reset() ;
			tree.truncateAfter( 2 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 ] ) ;
			tree.sanityCheck() ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
			
			reset() ;
			tree.truncateAfter( 2.72 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.72 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.73 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.73 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.8 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.8 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.85 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.85 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.9 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 2.9 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 4 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 4 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 5 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 5 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 6 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 6 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 7 , true ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;

			reset() ;
			tree.truncateAfter( 7 ) ;
			expect( [ ... tree.keys() ] ).to.equal( [ 2 , 2.5 , 2.7 , 2.72 , 2.75 , 2.76 , 2.77 , 2.8 , 2.85 , 3 , 5 , 6 ] ) ;
			tree.sanityCheck( true ) ;
			//console.log( "Tree after truncate:" ) ;
			//tree.debug() ;
		} ) ;
	} ) ;
	
	describe( "Internal methods" , () => {

		it( ".insertOrdered()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			tree.insertOrdered( 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' ] ) ;
			tree.sanityCheck() ;
			//tree.debug() ;

			tree = new BinaryTree() ;
			tree.insertOrdered( 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' ] ) ;
			tree.sanityCheck() ;
			//tree.debug() ;

			tree = new BinaryTree() ;
			tree.insertOrdered( 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' , 'stephen' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' , 'stephen' ] ) ;
			tree.sanityCheck() ;
			//tree.debug() ;

			tree = new BinaryTree() ;
			tree.insertOrdered( 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' , 'stephen' , 'jörgl' , 'edmund' , 'karl' , 'roberto' , 'juan' , 'augustus' , 'edward' , 'leon' , 'sergio' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bob' , 'joe' , 'russel' , 'marco' , 'jacky' , 'stephen' , 'jörgl' , 'edmund' , 'karl' , 'roberto' , 'juan' , 'augustus' , 'edward' , 'leon' , 'sergio' ] ) ;
			tree.sanityCheck() ;
			//tree.debug() ;
		} ) ;
		
		it( ".getClosestNode()" , () => {
			var tree  = new BinaryTree() ;

			tree.set( 3 , 'jack' ) ;
			tree.set( 2 , 'jean' ) ;
			tree.set( 5 , 'steve' ) ;
			tree.set( 2.5 , 'john' ) ;
			tree.set( 2.7 , 'robert' ) ;
			tree.set( 2.8 , 'johnson' ) ;
			tree.set( 2.75 , 'boris' ) ;
			tree.set( 6 , 'bobby' ) ;
			tree.set( 2.85 , 'carl' ) ;
			tree.set( 2.72 , 'tom' ) ;
			tree.set( 2.76 , 'roger' ) ;
			tree.set( 2.77 , 'vlad' ) ;
			
			//tree.debug() ;
			
			// Including existing
			expect( tree.getClosestNode( 2 , true , -1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2 , true , 1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.72 , true , -1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.72 , true , 1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.8 , true , -1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.8 , true , 1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.85 , true , -1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.85 , true , 1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 6 , true , -1 ).key ).to.be( 6 ) ;
			expect( tree.getClosestNode( 6 , true , 1 ).key ).to.be( 6 ) ;

			// Excluding existing
			expect( tree.getClosestNode( 2 , false , -1 ) ).to.be( null ) ;
			expect( tree.getClosestNode( 2 , false , 1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.5 , false , -1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.5 , false , 1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.7 , false , -1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.7 , false , 1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.72 , false , -1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.72 , false , 1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.75 , false , -1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.75 , false , 1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.76 , false , -1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.76 , false , 1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.77 , false , -1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.77 , false , 1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.8 , false , -1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.8 , false , 1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.85 , false , -1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.85 , false , 1 ).key ).to.be( 3 ) ;
			expect( tree.getClosestNode( 3 , false , -1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 3 , false , 1 ).key ).to.be( 5 ) ;
			expect( tree.getClosestNode( 6 , false , -1 ).key ).to.be( 5 ) ;
			expect( tree.getClosestNode( 6 , false , 1 ) ).to.be( null ) ;

			// Including unexisting
			expect( tree.getClosestNode( 1 , true , -1 ) ).to.be( null ) ;
			expect( tree.getClosestNode( 1 , true , 1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.1 , true , -1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.1 , true , 1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.6 , true , -1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.6 , true , 1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.71 , true , -1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.71 , true , 1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.73 , true , -1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.73 , true , 1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.755 , true , -1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.755 , true , 1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.765 , true , -1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.765 , true , 1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.78 , true , -1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.78 , true , 1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.84 , true , -1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.84 , true , 1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.9 , true , -1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.9 , true , 1 ).key ).to.be( 3 ) ;
			expect( tree.getClosestNode( 4 , true , -1 ).key ).to.be( 3 ) ;
			expect( tree.getClosestNode( 4 , true , 1 ).key ).to.be( 5 ) ;
			expect( tree.getClosestNode( 7 , true , -1 ).key ).to.be( 6 ) ;
			expect( tree.getClosestNode( 7 , true , 1 ) ).to.be( null ) ;
			
			// Excluding unexisting -- should be identical to 'including unexisting'
			expect( tree.getClosestNode( 1 , false , -1 ) ).to.be( null ) ;
			expect( tree.getClosestNode( 1 , false , 1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.1 , false , -1 ).key ).to.be( 2 ) ;
			expect( tree.getClosestNode( 2.1 , false , 1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.6 , false , -1 ).key ).to.be( 2.5 ) ;
			expect( tree.getClosestNode( 2.6 , false , 1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.71 , false , -1 ).key ).to.be( 2.7 ) ;
			expect( tree.getClosestNode( 2.71 , false , 1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.73 , false , -1 ).key ).to.be( 2.72 ) ;
			expect( tree.getClosestNode( 2.73 , false , 1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.755 , false , -1 ).key ).to.be( 2.75 ) ;
			expect( tree.getClosestNode( 2.755 , false , 1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.765 , false , -1 ).key ).to.be( 2.76 ) ;
			expect( tree.getClosestNode( 2.765 , false , 1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.78 , false , -1 ).key ).to.be( 2.77 ) ;
			expect( tree.getClosestNode( 2.78 , false , 1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.84 , false , -1 ).key ).to.be( 2.8 ) ;
			expect( tree.getClosestNode( 2.84 , false , 1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.9 , false , -1 ).key ).to.be( 2.85 ) ;
			expect( tree.getClosestNode( 2.9 , false , 1 ).key ).to.be( 3 ) ;
			expect( tree.getClosestNode( 4 , false , -1 ).key ).to.be( 3 ) ;
			expect( tree.getClosestNode( 4 , false , 1 ).key ).to.be( 5 ) ;
			expect( tree.getClosestNode( 7 , false , -1 ).key ).to.be( 6 ) ;
			expect( tree.getClosestNode( 7 , false , 1 ) ).to.be( null ) ;
		} ) ;
	} ) ;
} ) ;

