var colour = {
    black:"#000000",    //Home
    darkblue:"#4046F5", //Web
    gray:"#8A8A86", 	//Lines
    orange:"#FFD900", 	//Python
    purple:"#941e5e",   //PHP    
    brown:"#BFA843", 	//Java
    lightblue:"#009fc3",//Powershell
    uber:"#666666",      //C/C++
    green:"#73B55B"     //Android
}	
var data = {
    nodes:{
        Central: {	
				'color':colour.black, 
				'shape':'dot', 
				'radius':10,
				/*'image':'Home.png', //CHANGE TO PROJECTS*/
				'image_w':73,
				'image_h':24,
				'alpha':1
        },
        python:{
				'color':colour.orange, //Central
			 	'shape':'dot',
				//'label': 'PYTHON',						
				'radius':50, 
				'image':'python.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        },
        cplus:{
				'color':colour.uber, //C++ for school
			 	'shape':'dot',
				'radius':50, 
				'image':'c++.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        },				 				 
        java:{  
	   			'color':colour.brown, //Central               
				'shape':'dot',
				//'label': 'JAVA',						
				'radius':50, 
				'image': 'java.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        },
        /*
        terminal:{	
	   			'color':colour.lightblue,   //Terminal APPS (Powershell,bash,etc) Central
				'shape':'dot',
				'radius':50, 
				'image': 'powershell.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        }, 
        */
        android:{	
	   			'color':colour.green,   //Terminal APPS (Powershell,bash,etc) Central
				'shape':'dot',
				'radius':50, 
				'image': 'android.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        }, 
        web:{		
	   			'color':colour.darkblue,   //All web-related (HTML, CSS, PHP, JAVASCRIPT, JQUERY, etc)
				'shape':'dot',
				'radius':50, 
				'image': 'network.png',
				'image_w':25,
				'image_h':25,
				'alpha':1
        },		

/*========================================================================================================*/
        python1:{
		    	'label':'Tic-Tac-Toe', 
				'color':colour.orange, 
				'alpha': 0, 
				'link':'https://github.com/phreakradio/TicTacToe'
        },
        python2:{
		    	'label':'Router Simulator', 
				'color':colour.orange, 
				'alpha': 0, 
				'link':'https://github.com/phreakradio/Router_simulator'
        },
        java1:{ 		
	   			'label':'L.E.T.T.E.R',
				'color':colour.brown, 
				'alpha': 0,
				'link': 'https://github.com/phreakradio/LETTER'
        }, 
        java2:{ 
	   			'label':'Game of Life',
				'color':colour.brown, 
				'alpha': 0,
				'link': 'https://github.com/phreakradio/Conways-Game-Of-Life'
        }, 					
        java3:{ 
	   			'label':'MazeSolver',
				'color':colour.brown, 
				'alpha': 0,
				'link':'https://github.com/phreakradio/MazeSolver'
        },
        java4:{ 		
	   			'label':'Towers of Hanoi',
				'color':colour.brown, 
				'alpha': 0,
				'link': 'https://github.com/phreakradio/Towers-of-Hanoi'
        }, 					
        java5:{ 
	   			'label':'DFA Verifier',
				'color':colour.brown, 
				'alpha': 0,
				'link': 'https://github.com/phreakradio/DFA-Verifier'
        },
        java6:{ 
	   			'label':'PDA Verifier',
				'color':colour.brown, 
				'alpha': 0,
				'link':'https://github.com/phreakradio/PDA-Verfier'
        },
        java7:{ 
	   			'label':'DES Encryptor/Decryptor',
				'color':colour.brown, 
				'alpha': 0,
				'link':'https://github.com/phreakradio/DES-Example-in-Java'
        },
//        terminal1:{
//		   		'label':'Tracer', 
//				'color':colour.lightblue, 
//				'alpha': 0,
//				'link':'./POWERSHELL/Tracers.html'										 
//        },
        android1:{
		   		'label':'CS490 Project', 
				'color':colour.green, 
				'alpha': 0,
				'link':'https://github.com/hkajur/Code_Testing/tree/master/MobileApp/CS490ProjectRelease'
        },
		web1:{
				'label': 'Max Seiler Portfolio',
				'color':colour.darkblue,
				'alpha':0,
				'link': 'http://maxseiler.com/'
        },
		web2:{
				'label': 'Ode to No One',
				'color':colour.darkblue,
				'alpha':0,
				'link': 'http://web.njit.edu/~dm282/OdeToNoOne/index.html'
        },
        web3:{
				'label': 'Online group chat',
				'color':colour.darkblue,
				'alpha':0,
				'link': 'http://web.njit.edu/~dm282/IT202/assignment4/index.html#'
        },
		cplus1:{
				'label': 'LongInteger Arithmetic',
				'color':colour.uber,
				'alpha':0,
				'link': 'https://github.com/phreakradio/LongInteger-Arithmetic-functions'
        }
    },
      edges:{
          Central:{
              python:{}, 
              java:{}, 
//              terminal:{},
              android:{},
			  web:{}, 
              cplus:{},
        },
        python:{ python1:{},python2:{}},
        java:{ java1:{}, java2:{}, java3:{}, java4:{}, java5:{}, java6:{}, java7:{}},
		cplus:{cplus1:{}},
//        terminalA:{},
        android:{android1:{}},
		web:{web1:{},web2:{},web3:{}},
      }
    }
    
     // Initialise arbor
    var sys = arbor.ParticleSystem()
    sys.parameters({stiffness:700, repulsion:700, gravity:false, dt:0.015})
    sys.renderer = Renderer("#viewport");
    sys.graft(data);
    /*
    var nav = Nav("#nav")
    $(sys.renderer).bind('navigate', nav.navigate)
    $(nav).bind('mode', sys.renderer.switchMode)
    nav.init()*/