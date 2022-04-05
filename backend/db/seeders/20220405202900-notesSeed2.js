'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('Notes', [{ 
        title: 'test',
        content: `<p><span style="font-size: 14px;font-family: Tahoma;"><strong><ins>First Post is always the most impor</ins></strong></span></p>
        <p style="text-align:center;"><span style="font-size: 30px;font-family: Tahoma;"><strong><ins>Rocket Note HERE WE GO!</ins></strong></span></p>
        <p></p>
        <img src="https://media.gq.com/photos/57eac35d9228bbed3f6f4ee5/master/pass/elon-musk-is-a-rocket.jpg" alt="undefined" style="height: 200px;width: auto"/>
        <p></p>
        <p>Lets make a cool site!<br><ins>Adding some features in here like...</ins><br></p>
        <ol>
        <li>CRUD - NOTES<br>this is completed i think...<br>now it works with notebook select drop down.<br>now to add it to edit page as well</li>
        <li>CRUD - NOTEBOOKS<br>Create and READ is done.<br>Update and delete needs to be worked on</li>
        <li>RICH TEXT EDITOR<br>this is completed.</li>
        </ol>
        <p></p>`,
        noteBookId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'test2',
        content: `<p>2. Pokemon Charizard</p>
        <p style="text-align:center;"><span style="font-size: 24px;"><strong>Fire Lizard</strong></span></p>
        <p></p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="undefined" style="height: 150px;width: auto"/>
        <p>Germans called these creatures fire lizards. They are born from the ashes of a burnt orphanage. They are known to steal left sock of every kind children in the village. You are to stomp out its flame on the tail to snuff out its life fire. They reproduce parassitically and are omnivorous.&nbsp;</p>
        <p></p>
        <p style="text-align:right;"></p>
        <img src="https://media.istockphoto.com/photos/komodo-dragon-picture-id453931239?k=20&m=453931239&s=612x612&w=0&h=miNsbNVfGUy43oHC4mDBRI0gQq8GSh7HzgL_VlhcgDM=" alt="undefined" style="height: 300px;width: auto"/>
        <p></p>
        `,
        noteBookId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        title: 'test3',
        content: `<p><span style="font-size: 30px;">EDIT THIS AND TEST</span></p>
        <p>EDIT note</p>
        <p>	allow for notebook change and selection</p>
        <p></p>
        <p></p>
        <p>READ Notebook</p>
        <p>	on click -&gt; query notes per notebook</p>
        <p></p>
        <p></p>
        <p>Update Notebook</p>
        <p>frontend</p>
        <p>Delete Notebook</p>
        <p>frontend</p>
        <p></p>
        <p>Sign up  modal &lt;-</p>
        <p>CSS for log in</p>
        <p></p>
        <p>clean up nav bar links</p>
        <p></p>
        <p></p>
        <p>Search bar</p>
        <p>change scratch Pad to Calendar<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png" alt="undefined" style="height: ;width: "/></p>`,
        noteBookId: 1,
        userId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  down: (queryInterface, Sequelize) => {

      return queryInterface.bulkDelete('Notes', null, {});

  }
};
