

// Pathfinding w/ Genetic Algorithms

// DNA is an array of vectors

function DNA(newgenes) {
  // The maximum strength of the forces
  this.maxforce;

  // The genetic sequence
  if (newgenes) {
    this.genes = newgenes;
  } 
  else {
    this.genes = [];
    // Constructor (makes a DNA of random PVectors)
	}

  // give each Rocket an extra boost of strength for its first frame


  // CROSSOVER
  // Creates new DNA sequence from two (this & and a partner)
  this.crossover = function(partner) {
    var child 
    // Pick a midpoint

    var newgenes = new DNA(child);
    return newgenes;
  }

  // Based on a mutation probability, picks a new random Vector
  this.mutate = function(m) {
    
  }
}
