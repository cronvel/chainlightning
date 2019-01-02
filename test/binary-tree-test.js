/*
	Chain Lightning

	Copyright (c) 2018 Cédric Ronvel

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





function sanityCheck( tree ) {
	/*
	var length = 0 ,
		lastSlot = null ,
		slot = list.head ;
	
	while ( slot ) {
		expect( slot.list ).to.be( list ) ;
		expect( slot.previous ).to.be( lastSlot ) ;
		
		// Useless because we precisely come from that lastSlot
		//if ( lastSlot ) { expect( lastSlot.next ).to.be( slot ) ; }
		
		length ++ ;
		
		lastSlot = slot ;
		slot = slot.next ;
	}
	
	expect( list.tail ).to.be( lastSlot ) ;
	expect( list.length ).to.be( length ) ;
	*/
}





			/* Tests */



describe( "Binary Tree" , () => {

	describe( "Basic features" , () => {
		
		it( "constructor arguments should be added as elements" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( "BinaryTree.from() should create a tree from any iterable" , () => {
			var tree ;
			
			tree = BinaryTree.from( new Set() ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = BinaryTree.from( new Set( [ 'jack' ] ) ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			sanityCheck( tree ) ;
			
			tree = BinaryTree.from( new Set( [ 'jack' , 'jean' , 'steve' ] ) ) ;
			sanityCheck( tree ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
		} ) ;
		
		it( ".push()/.append()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( tree ).to.have.length( 0 ) ;
			
			tree.push( 'bob' ) ;
			tree.append( 'bill' ) ;
			tree.push( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'bob' , 'bill' , 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree() ;
			tree.push( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		return ;
		
		it( ".unshift()/.prepend()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( tree ).to.have.length( 0 ) ;
			
			tree.unshift( 'bob' ) ;
			tree.prepend( 'bill' ) ;
			tree.unshift( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' , 'bill' , 'bob' ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree() ;
			tree.push( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".pop()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( tree.pop() ).to.be( undefined ) ;
			expect( tree ).to.have.length( 0 ) ;
			sanityCheck( tree ) ;
			
			tree.push( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.pop() ).to.be( 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.pop() ).to.be( 'jean' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.pop() ).to.be( 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.pop() ).to.be( undefined ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".shift()" , () => {
			var tree ;
			
			tree = new BinaryTree() ;
			expect( tree.shift() ).to.be( undefined ) ;
			expect( tree ).to.have.length( 0 ) ;
			sanityCheck( tree ) ;
			
			tree.push( 'jack' , 'jean' , 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jack' , 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.shift() ).to.be( 'jack' ) ;
			expect( [ ... tree ] ).to.equal( [ 'jean' , 'steve' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.shift() ).to.be( 'jean' ) ;
			expect( [ ... tree ] ).to.equal( [ 'steve' ] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.shift() ).to.be( 'steve' ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			expect( tree.shift() ).to.be( undefined ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
		} ) ;
	} ) ;
		
	return ;











	describe( "Advanced Array-like features" , () => {
		
		it( ".slots()" , () => {
			var slots ;
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			slots = tree.slots() ;
			expect( slots ).to.be.an( Array ) ;
			expect( slots ).to.have.length( 3 ) ;
			expect( slots.map( e => e.element ) ).to.equal( [ e1 , e2 , e3 ] ) ;
			
			tree = new BinaryTree() ;
			slots = tree.slots() ;
			expect( slots ).to.be.an( Array ) ;
			expect( slots ).to.have.length( 0 ) ;
			expect( slots.map( e => e.element ) ).to.equal( [] ) ;
			
			tree = new BinaryTree( e1 , e2 , e2 , e2 , e3 ) ;
			slots = tree.slots() ;
			expect( slots ).to.be.an( Array ) ;
			expect( slots ).to.have.length( 5 ) ;
			expect( slots.map( e => e.element ) ).to.equal( [ e1 , e2 , e2 , e2 , e3 ] ) ;
		} ) ;
		
		it( ".slotOf()/.lastSlotOf()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.slotOf( e2 ).element ).to.be( e2 ) ;
			expect( tree.slotOf( e4 ) ).to.be( null ) ;
			
			tree.push( e2 , e2 , e2 ) ;
			tree.set( tree.slotOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ { v: 'jack' } , { v: 'bobby' } , { v: 'steve' } , { v: 'bob' } , { v: 'bob' } , { v: 'bob' } ] ) ;
			tree.set( tree.lastSlotOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ { v: 'jack' } , { v: 'bobby' } , { v: 'steve' } , { v: 'bob' } , { v: 'bob' } , { v: 'bobby' } ] ) ;
		} ) ;
		
		it( ".includes()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( e1 ) ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( e1 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.false() ;
			
			tree = new BinaryTree( e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( e2 , e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( e1 , e3 , e2 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
			
			tree = new BinaryTree( e2 , e1 , e3 ) ;
			expect( tree.includes( e2 ) ).to.be.true() ;
		} ) ;

		it( ".forEach()" , () => {
			var tree ,
				accumulator = [] ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			tree.forEach( element => accumulator.push( element.v ) ) ;
			expect( accumulator ).to.equal( [] ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			tree.forEach( element => accumulator.push( element.v ) ) ;
			expect( accumulator ).to.equal( [ 'jack' , 'bob' , 'steve' ] ) ;
		} ) ;

		it( ".some()/.every()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
			
			tree = new BinaryTree( e1 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.false() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
			
			tree = new BinaryTree( e1 , e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( e2 , e1 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( e1 , e2 , e2 , e3 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.false() ;
			
			tree = new BinaryTree( e2 , e2 , e2 ) ;
			expect( tree.some( element => element.v === 'bob' ) ).to.be.true() ;
			expect( tree.every( element => element.v === 'bob' ) ).to.be.true() ;
		} ) ;
		
		it( ".find()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bob' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e2 ) ;
			expect( tree.find( element => element.v === 'bobby' ) ).to.be( undefined ) ;
			
			tree.push( e4 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e2 ) ;
			
			tree.unshift( e4 ) ;
			expect( tree.find( element => element.v === 'bob' ) ).to.be( e4 ) ;
		} ) ;
		
		it( ".findSlot()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bob' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.get( tree.findSlot( element => element.v === 'bob' ) ) ).to.be( e2 ) ;
			expect( tree.findSlot( element => element.v === 'bobby' ) ).to.be( null ) ;
			expect( tree.get( tree.findSlot( element => element.v === 'bobby' ) ) ).to.be( undefined ) ;
			
			tree.push( e4 ) ;
			expect( tree.get( tree.findSlot( element => element.v === 'bob' ) ) ).to.be( e2 ) ;
			
			tree.unshift( e4 ) ;
			expect( tree.get( tree.findSlot( element => element.v === 'bob' ) ) ).to.be( e4 ) ;
		} ) ;
		
		it( ".map()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree().map( element => element.v + element.v ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).map( element => element.v + element.v ) ;
			expect( [ ... tree ] ).to.equal( [ 'jackjack' ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).map( element => element.v + element.v ) ;
			expect( [ ... tree ] ).to.equal( [ 'jackjack' , 'bobbob' , 'stevesteve' ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".reduce()/.reduceRight" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree() ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( '' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( '' ) ;
			
			tree = new BinaryTree( e1 ) ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jack' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jack' ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.reduce( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'jackbobsteve' ) ;
			expect( tree.reduceRight( ( accumulator , element ) => accumulator + element.v , '' ) ).to.equal( 'stevebobjack' ) ;
		} ) ;
		
		it( ".filter()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree( e2 , e2 , e2 ) ;
			expect( tree.filter( () => true ) ).not.to.be( tree ) ;
			
			tree = new BinaryTree().filter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).filter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).filter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).filter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e3 ).filter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 , e2 , e2 ).filter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).filter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e2 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".reverse()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree().reverse() ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).reverse() ;
			expect( [ ... tree ] ).to.equal( [ e1 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).reverse() ;
			expect( [ ... tree ] ).to.equal( [ e3 , e2 , e1 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( "missing .concat()" ) ;
		it( "missing .copyWithin()" ) ;
		it( "missing .slice()" ) ;
		it( "missing .splice()" ) ;
		it( "missing .sort()" ) ;
	} ) ;



	describe( "Advanced custom features" , () => {
		
		it( ".removeSlot()/.deleteSlot()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			tree.removeSlot( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree() ;
			tree.removeSlot( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 ) ;
			tree.removeSlot( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 , e1 , e3 ) ;
			tree.removeSlot( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e3 , e2 ) ;
			tree.removeSlot( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".remove()/.delete()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree() ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 ) ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 , e1 , e3 ) ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e3 , e2 ) ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			// Remove all occurences
			tree = new BinaryTree( e2 , e2 , e2 , e1 , e2 , e3 , e2 ) ;
			tree.remove( e2 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			// NaN test
			tree = new BinaryTree( NaN , NaN , NaN , e1 , NaN , e3 , NaN ) ;
			tree.remove( NaN ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".moveAfter()/.moveToTail()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e1 ) , tree.slotOf( e1 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e1 ) , tree.slotOf( e2 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e1 ) , tree.slotOf( e3 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e3 , e1 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToTail( tree.slotOf( e1 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e3 , e1 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e2 ) , tree.slotOf( e1 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e2 ) , tree.slotOf( e2 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e2 ) , tree.slotOf( e3 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToTail( tree.slotOf( e2 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e3 ) , tree.slotOf( e1 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e3 ) , tree.slotOf( e2 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveAfter( tree.slotOf( e3 ) , tree.slotOf( e3 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToTail( tree.slotOf( e3 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".moveBefore()/.moveToHead()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e1 ) , tree.slotOf( e1 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToHead( tree.slotOf( e1 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e1 ) , tree.slotOf( e2 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e1 ) , tree.slotOf( e3 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e2 ) , tree.slotOf( e1 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToHead( tree.slotOf( e2 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e2 , e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e2 ) , tree.slotOf( e2 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e2 ) , tree.slotOf( e3 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e3 ) , tree.slotOf( e1 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e3 , e1 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveToHead( tree.slotOf( e3 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e3 , e1 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e3 ) , tree.slotOf( e2 ) ) ).to.be.true() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 , e2 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			expect( tree.moveBefore( tree.slotOf( e3 ) , tree.slotOf( e3 ) ) ).to.be.false() ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".insertAfter()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			
			tree.insertAfter( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertAfter( tree.slotOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e4 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertAfter( tree.slotOf( e1 ) , e4 , e4 , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e4 , e4 , e4 , e2 , e4 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertAfter( tree.slotOf( e3 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e4 , e4 , e4 , e2 , e4 , e3 , e4 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".insertBefore()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ,
				e4 = { v: 'bobby' } ;
			
			tree = new BinaryTree( e1 , e2 , e3 ) ;
			
			tree.insertBefore( tree.slotOf( e2 ) ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertBefore( tree.slotOf( e2 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e4 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertBefore( tree.slotOf( e1 ) , e4 , e4 , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e4 , e4 , e4 , e1 , e4 , e2 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree.insertBefore( tree.slotOf( e3 ) , e4 ) ;
			expect( [ ... tree ] ).to.equal( [ e4 , e4 , e4 , e1 , e4 , e2 , e4 , e3 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
		
		it( ".inPlaceFilter()" , () => {
			var tree ,
				e1 = { v: 'jack' } ,
				e2 = { v: 'bob' } ,
				e3 = { v: 'steve' } ;
			
			tree = new BinaryTree( e2 , e2 , e2 ) ;
			expect( tree.inPlaceFilter( () => true ) ).to.be( tree ) ;
			
			tree = new BinaryTree().inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 ).inPlaceFilter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e3 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e1 , e3 ] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e2 , e2 , e2 ).inPlaceFilter( element => element.v.length >= 4 ) ;
			expect( [ ... tree ] ).to.equal( [] ) ;
			sanityCheck( tree ) ;
			
			tree = new BinaryTree( e1 , e2 , e3 ).inPlaceFilter( element => element.v.length < 4 ) ;
			expect( [ ... tree ] ).to.equal( [ e2 ] ) ;
			sanityCheck( tree ) ;
		} ) ;
	} ) ;

} ) ;
