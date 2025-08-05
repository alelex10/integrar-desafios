## Ejercicios

##### Contar cuántas películas empiezan con la letra S.

```sql
SELECT COUNT(*) FROM film WHERE film.title LIKE 'S%'
-- "count" 119
```

##### Sumar la duración en minutos de todas las películas clasificadas para PG-13.

```sql
SELECT SUM(film.length) AS length_pg_13 FROM film WHERE rating = 'PG-13'
-- "length_pg_13"
-- 26859
```

##### Mostrar todos los emails de los clientes junto con la suma de todas las películas que rentaron.

```sql
 SELECT email,COUNT(*) FROM customer as c
 INNER JOIN rental AS r ON c.customer_id = r.customer_id
 GROUP BY email
```

<details>
  <summary>Resultado</summary>

| email                                    | count |
| ---------------------------------------- | ----- |
| harold.martino@sakilacustomer.org        | 32    |
| sean.douglass@sakilacustomer.org         | 23    |
| bob.pfeiffer@sakilacustomer.org          | 24    |
| jo.fowler@sakilacustomer.org             | 20    |
| raul.fortier@sakilacustomer.org          | 20    |
| annette.olson@sakilacustomer.org         | 24    |
| jeanne.lawson@sakilacustomer.org         | 27    |
| diane.collins@sakilacustomer.org         | 35    |
| cindy.fisher@sakilacustomer.org          | 29    |
| shelly.watts@sakilacustomer.org          | 26    |
| megan.palmer@sakilacustomer.org          | 27    |
| erica.matthews@sakilacustomer.org        | 22    |
| beverly.brooks@sakilacustomer.org        | 24    |
| beatrice.arnold@sakilacustomer.org       | 26    |
| glen.talbert@sakilacustomer.org          | 26    |
| randy.gaither@sakilacustomer.org         | 28    |
| virginia.green@sakilacustomer.org        | 32    |
| tyrone.asher@sakilacustomer.org          | 24    |
| glenda.frazier@sakilacustomer.org        | 32    |
| louis.leone@sakilacustomer.org           | 35    |
| rhonda.kennedy@sakilacustomer.org        | 39    |
| carla.gutierrez@sakilacustomer.org       | 26    |
| herman.devore@sakilacustomer.org         | 29    |
| carol.garcia@sakilacustomer.org          | 22    |
| perry.swafford@sakilacustomer.org        | 24    |
| anita.morales@sakilacustomer.org         | 15    |
| andrea.henderson@sakilacustomer.org      | 22    |
| michelle.clark@sakilacustomer.org        | 35    |
| susan.wilson@sakilacustomer.org          | 24    |
| lauren.hudson@sakilacustomer.org         | 20    |
| yolanda.weaver@sakilacustomer.org        | 27    |
| gertrude.castillo@sakilacustomer.org     | 34    |
| lawrence.lawton@sakilacustomer.org       | 31    |
| betty.white@sakilacustomer.org           | 28    |
| troy.quigley@sakilacustomer.org          | 30    |
| mario.cheatham@sakilacustomer.org        | 28    |
| clara.shaw@sakilacustomer.org            | 42    |
| tamara.nguyen@sakilacustomer.org         | 25    |
| matthew.mahan@sakilacustomer.org         | 31    |
| billie.horton@sakilacustomer.org         | 26    |
| wendy.harrison@sakilacustomer.org        | 30    |
| mabel.holland@sakilacustomer.org         | 30    |
| edward.baugh@sakilacustomer.org          | 28    |
| dean.sauer@sakilacustomer.org            | 27    |
| cynthia.young@sakilacustomer.org         | 32    |
| minnie.romero@sakilacustomer.org         | 34    |
| jack.foust@sakilacustomer.org            | 24    |
| sidney.burleson@sakilacustomer.org       | 25    |
| elaine.stevens@sakilacustomer.org        | 24    |
| brittany.riley@sakilacustomer.org        | 28    |
| billy.poulin@sakilacustomer.org          | 35    |
| cory.meehan@sakilacustomer.org           | 24    |
| pauline.henry@sakilacustomer.org         | 27    |
| leona.obrien@sakilacustomer.org          | 14    |
| nicole.peterson@sakilacustomer.org       | 22    |
| dustin.gillette@sakilacustomer.org       | 26    |
| nathaniel.adam@sakilacustomer.org        | 28    |
| sally.pierce@sakilacustomer.org          | 32    |
| jesus.mccartney@sakilacustomer.org       | 24    |
| isaac.oglesby@sakilacustomer.org         | 29    |
| marshall.thorn@sakilacustomer.org        | 23    |
| theresa.watson@sakilacustomer.org        | 30    |
| peggy.myers@sakilacustomer.org           | 24    |
| peter.menard@sakilacustomer.org          | 23    |
| josephine.gomez@sakilacustomer.org       | 26    |
| kurt.emmons@sakilacustomer.org           | 23    |
| steven.curley@sakilacustomer.org         | 29    |
| grace.ellis@sakilacustomer.org           | 33    |
| justin.ngo@sakilacustomer.org            | 36    |
| gwendolyn.may@sakilacustomer.org         | 25    |
| victoria.gibson@sakilacustomer.org       | 27    |
| bobbie.craig@sakilacustomer.org          | 24    |
| carolyn.perez@sakilacustomer.org         | 30    |
| amy.lopez@sakilacustomer.org             | 29    |
| joann.gardner@sakilacustomer.org         | 16    |
| leroy.bustamante@sakilacustomer.org      | 32    |
| albert.crouse@sakilacustomer.org         | 23    |
| lynn.payne@sakilacustomer.org            | 28    |
| sherri.rhodes@sakilacustomer.org         | 33    |
| frank.waggoner@sakilacustomer.org        | 32    |
| jane.bennett@sakilacustomer.org          | 28    |
| reginald.kinder@sakilacustomer.org       | 28    |
| william.satterfield@sakilacustomer.org   | 26    |
| doris.reed@sakilacustomer.org            | 22    |
| kelly.knott@sakilacustomer.org           | 25    |
| melvin.ellington@sakilacustomer.org      | 26    |
| shannon.freeman@sakilacustomer.org       | 24    |
| cathy.spencer@sakilacustomer.org         | 29    |
| mitchell.westmoreland@sakilacustomer.org | 32    |
| angel.barclay@sakilacustomer.org         | 32    |
| johnnie.chisholm@sakilacustomer.org      | 24    |
| irene.price@sakilacustomer.org           | 23    |
| wanda.patterson@sakilacustomer.org       | 30    |
| katie.elliott@sakilacustomer.org         | 25    |
| caroline.bowman@sakilacustomer.org       | 15    |
| lester.kraus@sakilacustomer.org          | 16    |
| marian.mendoza@sakilacustomer.org        | 23    |
| jose.andrew@sakilacustomer.org           | 25    |
| bessie.morrison@sakilacustomer.org       | 28    |
| felix.gaffney@sakilacustomer.org         | 24    |
| duane.tubbs@sakilacustomer.org           | 31    |
| vernon.chapa@sakilacustomer.org          | 18    |
| jamie.waugh@sakilacustomer.org           | 25    |
| kimberly.lee@sakilacustomer.org          | 25    |
| brett.cornwell@sakilacustomer.org        | 34    |
| kay.caldwell@sakilacustomer.org          | 20    |
| katherine.rivera@sakilacustomer.org      | 14    |
| darlene.rose@sakilacustomer.org          | 31    |
| tom.milner@sakilacustomer.org            | 32    |
| ricky.shelby@sakilacustomer.org          | 25    |
| judith.cox@sakilacustomer.org            | 33    |
| karl.seal@sakilacustomer.org             | 45    |
| carrie.porter@sakilacustomer.org         | 34    |
| brandon.huey@sakilacustomer.org          | 37    |
| ralph.madrigal@sakilacustomer.org        | 34    |
| sergio.stanfield@sakilacustomer.org      | 26    |
| dianne.shelton@sakilacustomer.org        | 31    |
| tracy.cole@sakilacustomer.org            | 30    |
| george.linton@sakilacustomer.org         | 33    |
| maria.miller@sakilacustomer.org          | 33    |
| freddie.duggan@sakilacustomer.org        | 25    |
| ann.evans@sakilacustomer.org             | 17    |
| brandy.graves@sakilacustomer.org         | 28    |
| esther.crawford@sakilacustomer.org       | 28    |
| edgar.rhoads@sakilacustomer.org          | 25    |
| ronald.weiner@sakilacustomer.org         | 30    |
| johnny.turpin@sakilacustomer.org         | 19    |
| rafael.abney@sakilacustomer.org          | 21    |
| mary.smith@sakilacustomer.org            | 32    |
| arthur.simpkins@sakilacustomer.org       | 32    |
| shawn.heaton@sakilacustomer.org          | 33    |
| christopher.greco@sakilacustomer.org     | 31    |
| jeffrey.spear@sakilacustomer.org         | 23    |
| jason.morrissey@sakilacustomer.org       | 28    |
| travis.estep@sakilacustomer.org          | 25    |
| carl.artis@sakilacustomer.org            | 23    |
| april.burns@sakilacustomer.org           | 26    |
| carole.barnett@sakilacustomer.org        | 30    |
| lillian.griffin@sakilacustomer.org       | 25    |
| jaime.nettles@sakilacustomer.org         | 29    |
| jay.robb@sakilacustomer.org              | 26    |
| leah.curtis@sakilacustomer.org           | 25    |
| ruth.martinez@sakilacustomer.org         | 24    |
| tanya.gilbert@sakilacustomer.org         | 33    |
| toni.holt@sakilacustomer.org             | 23    |
| chad.carbone@sakilacustomer.org          | 25    |
| anne.powell@sakilacustomer.org           | 23    |
| donald.mahon@sakilacustomer.org          | 23    |
| edwin.burk@sakilacustomer.org            | 23    |
| patrick.newsom@sakilacustomer.org        | 31    |
| deborah.walker@sakilacustomer.org        | 29    |
| allison.stanley@sakilacustomer.org       | 27    |
| bernice.willis@sakilacustomer.org        | 33    |
| rodney.moeller@sakilacustomer.org        | 23    |
| melanie.armstrong@sakilacustomer.org     | 25    |
| lance.pemberton@sakilacustomer.org       | 22    |
| velma.lucas@sakilacustomer.org           | 27    |
| seth.hannon@sakilacustomer.org           | 25    |
| sheila.wells@sakilacustomer.org          | 18    |
| antonio.meek@sakilacustomer.org          | 16    |
| neil.renner@sakilacustomer.org           | 32    |
| danielle.daniels@sakilacustomer.org      | 25    |
| eugene.culpepper@sakilacustomer.org      | 19    |
| stella.moreno@sakilacustomer.org         | 22    |
| julie.sanchez@sakilacustomer.org         | 29    |
| alexander.fennell@sakilacustomer.org     | 36    |
| rachel.barnes@sakilacustomer.org         | 22    |
| micheal.forman@sakilacustomer.org        | 26    |
| curtis.irby@sakilacustomer.org           | 38    |
| viola.hanson@sakilacustomer.org          | 32    |
| erika.pena@sakilacustomer.org            | 26    |
| erik.guillen@sakilacustomer.org          | 29    |
| phillip.holm@sakilacustomer.org          | 26    |
| priscilla.lowe@sakilacustomer.org        | 35    |
| dave.gardiner@sakilacustomer.org         | 32    |
| dwight.lombardi@sakilacustomer.org       | 17    |
| laurie.lawrence@sakilacustomer.org       | 23    |
| maureen.little@sakilacustomer.org        | 21    |
| marilyn.ross@sakilacustomer.org          | 30    |
| elsie.kelley@sakilacustomer.org          | 37    |
| nancy.thomas@sakilacustomer.org          | 28    |
| greg.robins@sakilacustomer.org           | 30    |
| samantha.duncan@sakilacustomer.org       | 23    |
| daryl.larue@sakilacustomer.org           | 27    |
| thelma.murray@sakilacustomer.org         | 32    |
| salvador.teel@sakilacustomer.org         | 30    |
| tracey.barrett@sakilacustomer.org        | 27    |
| willie.howell@sakilacustomer.org         | 26    |
| ivan.cromwell@sakilacustomer.org         | 26    |
| andre.rapp@sakilacustomer.org            | 28    |
| theodore.culp@sakilacustomer.org         | 31    |
| lena.jensen@sakilacustomer.org           | 32    |
| ricardo.meador@sakilacustomer.org        | 21    |
| kirk.stclair@sakilacustomer.org          | 19    |
| mark.rinehart@sakilacustomer.org         | 26    |
| terri.vasquez@sakilacustomer.org         | 27    |
| margaret.moore@sakilacustomer.org        | 23    |
| suzanne.nichols@sakilacustomer.org       | 24    |
| raymond.mcwhorter@sakilacustomer.org     | 30    |
| debra.nelson@sakilacustomer.org          | 29    |
| beth.franklin@sakilacustomer.org         | 25    |
| alvin.deloach@sakilacustomer.org         | 29    |
| joy.george@sakilacustomer.org            | 33    |
| tina.simmons@sakilacustomer.org          | 28    |
| sherry.marshall@sakilacustomer.org       | 34    |
| brian.wyman@sakilacustomer.org           | 12    |
| phyllis.foster@sakilacustomer.org        | 23    |
| clarence.gamez@sakilacustomer.org        | 30    |
| miriam.mckinney@sakilacustomer.org       | 26    |
| andrew.purdy@sakilacustomer.org          | 27    |
| ida.andrews@sakilacustomer.org           | 23    |
| constance.reid@sakilacustomer.org        | 25    |
| lillie.kim@sakilacustomer.org            | 23    |
| ross.grey@sakilacustomer.org             | 27    |
| becky.miles@sakilacustomer.org           | 29    |
| jordan.archuleta@sakilacustomer.org      | 30    |
| derrick.bourque@sakilacustomer.org       | 22    |
| jacqueline.long@sakilacustomer.org       | 33    |
| bruce.schwarz@sakilacustomer.org         | 23    |
| felicia.sutton@sakilacustomer.org        | 28    |
| ernest.stepp@sakilacustomer.org          | 25    |
| darrell.power@sakilacustomer.org         | 25    |
| gene.sanborn@sakilacustomer.org          | 27    |
| jennifer.davis@sakilacustomer.org        | 28    |
| jill.hawkins@sakilacustomer.org          | 21    |
| tonya.chapman@sakilacustomer.org         | 32    |
| tommy.collazo@sakilacustomer.org         | 38    |
| paul.trout@sakilacustomer.org            | 23    |
| kelly.torres@sakilacustomer.org          | 22    |
| mildred.bailey@sakilacustomer.org        | 25    |
| regina.berry@sakilacustomer.org          | 34    |
| randall.neumann@sakilacustomer.org       | 23    |
| floyd.gandy@sakilacustomer.org           | 17    |
| janice.ward@sakilacustomer.org           | 34    |
| jacob.lance@sakilacustomer.org           | 21    |
| wallace.slone@sakilacustomer.org         | 25    |
| ronnie.ricketts@sakilacustomer.org       | 25    |
| warren.sherrod@sakilacustomer.org        | 33    |
| eddie.tomlin@sakilacustomer.org          | 27    |
| dan.paine@sakilacustomer.org             | 22    |
| sharon.robinson@sakilacustomer.org       | 30    |
| lois.butler@sakilacustomer.org           | 35    |
| joseph.joy@sakilacustomer.org            | 30    |
| jean.bell@sakilacustomer.org             | 27    |
| byron.box@sakilacustomer.org             | 29    |
| jessie.banks@sakilacustomer.org          | 26    |
| tiffany.jordan@sakilacustomer.org        | 14    |
| luis.yanez@sakilacustomer.org            | 20    |
| jackie.lynch@sakilacustomer.org          | 25    |
| alma.austin@sakilacustomer.org           | 35    |
| robert.baughman@sakilacustomer.org       | 21    |
| melinda.fernandez@sakilacustomer.org     | 17    |
| misty.lambert@sakilacustomer.org         | 27    |
| marjorie.tucker@sakilacustomer.org       | 32    |
| larry.thrasher@sakilacustomer.org        | 26    |
| ted.breaux@sakilacustomer.org            | 29    |
| irma.pearson@sakilacustomer.org          | 18    |
| patricia.johnson@sakilacustomer.org      | 27    |
| gordon.allard@sakilacustomer.org         | 32    |
| stephanie.mitchell@sakilacustomer.org    | 25    |
| nathan.runyon@sakilacustomer.org         | 32    |
| patsy.davidson@sakilacustomer.org        | 28    |
| agnes.bishop@sakilacustomer.org          | 23    |
| wilma.richards@sakilacustomer.org        | 20    |
| naomi.jennings@sakilacustomer.org        | 35    |
| ana.bradley@sakilacustomer.org           | 34    |
| vanessa.sims@sakilacustomer.org          | 19    |
| edna.west@sakilacustomer.org             | 26    |
| janet.phillips@sakilacustomer.org        | 27    |
| tracy.herrmann@sakilacustomer.org        | 28    |
| christian.jung@sakilacustomer.org        | 24    |
| ruby.washington@sakilacustomer.org       | 28    |
| norman.currier@sakilacustomer.org        | 26    |
| evelyn.morgan@sakilacustomer.org         | 28    |
| kent.arsenault@sakilacustomer.org        | 27    |
| john.farnsworth@sakilacustomer.org       | 31    |
| lorraine.stephens@sakilacustomer.org     | 21    |
| tara.ryan@sakilacustomer.org             | 20    |
| anthony.schwab@sakilacustomer.org        | 20    |
| willie.markham@sakilacustomer.org        | 25    |
| maxine.silva@sakilacustomer.org          | 32    |
| annie.russell@sakilacustomer.org         | 18    |
| juan.fraley@sakilacustomer.org           | 23    |
| bertha.ferguson@sakilacustomer.org       | 25    |
| mattie.hoffman@sakilacustomer.org        | 22    |
| joanne.robertson@sakilacustomer.org      | 34    |
| richard.mccrary@sakilacustomer.org       | 25    |
| judy.gray@sakilacustomer.org             | 25    |
| lewis.lyman@sakilacustomer.org           | 19    |
| franklin.troutman@sakilacustomer.org     | 22    |
| eduardo.hiatt@sakilacustomer.org         | 27    |
| gerald.fultz@sakilacustomer.org          | 30    |
| barry.lovelace@sakilacustomer.org        | 33    |
| florence.woods@sakilacustomer.org        | 30    |
| armando.gruber@sakilacustomer.org        | 21    |
| ben.easter@sakilacustomer.org            | 26    |
| elmer.noe@sakilacustomer.org             | 26    |
| lisa.anderson@sakilacustomer.org         | 24    |
| catherine.campbell@sakilacustomer.org    | 34    |
| jeff.east@sakilacustomer.org             | 30    |
| shane.millard@sakilacustomer.org         | 22    |
| kyle.spurlock@sakilacustomer.org         | 30    |
| charles.kowalski@sakilacustomer.org      | 32    |
| diana.alexander@sakilacustomer.org       | 27    |
| crystal.ford@sakilacustomer.org          | 33    |
| vivian.ruiz@sakilacustomer.org           | 23    |
| calvin.martel@sakilacustomer.org         | 23    |
| christy.vargas@sakilacustomer.org        | 31    |
| vincent.ralston@sakilacustomer.org       | 25    |
| marcus.hidalgo@sakilacustomer.org        | 30    |
| alice.stewart@sakilacustomer.org         | 33    |
| benjamin.varney@sakilacustomer.org       | 23    |
| pamela.baker@sakilacustomer.org          | 23    |
| brad.mccurdy@sakilacustomer.org          | 25    |
| michele.grant@sakilacustomer.org         | 30    |
| kevin.schuler@sakilacustomer.org         | 22    |
| allen.butterfield@sakilacustomer.org     | 21    |
| darryl.ashcraft@sakilacustomer.org       | 23    |
| clifton.malcolm@sakilacustomer.org       | 27    |
| kenneth.gooden@sakilacustomer.org        | 17    |
| harry.arce@sakilacustomer.org            | 35    |
| sandra.martin@sakilacustomer.org         | 28    |
| louise.jenkins@sakilacustomer.org        | 25    |
| frances.parker@sakilacustomer.org        | 22    |
| douglas.graf@sakilacustomer.org          | 25    |
| terry.carlson@sakilacustomer.org         | 29    |
| jesse.schilling@sakilacustomer.org       | 26    |
| courtney.day@sakilacustomer.org          | 32    |
| morris.mccarter@sakilacustomer.org       | 34    |
| gregory.mauldin@sakilacustomer.org       | 23    |
| alan.kahn@sakilacustomer.org             | 26    |
| rosemary.schmidt@sakilacustomer.org      | 35    |
| dorothy.taylor@sakilacustomer.org        | 25    |
| ella.oliver@sakilacustomer.org           | 31    |
| donna.thompson@sakilacustomer.org        | 21    |
| terrence.gunderson@sakilacustomer.org    | 30    |
| virgil.wofford@sakilacustomer.org        | 27    |
| eric.robert@sakilacustomer.org           | 27    |
| tony.carranza@sakilacustomer.org         | 21    |
| helen.harris@sakilacustomer.org          | 32    |
| wayne.truong@sakilacustomer.org          | 19    |
| wesley.bull@sakilacustomer.org           | 40    |
| pearl.garza@sakilacustomer.org           | 22    |
| mae.fletcher@sakilacustomer.org          | 31    |
| bobby.boudreau@sakilacustomer.org        | 35    |
| roberta.harper@sakilacustomer.org        | 23    |
| debbie.reyes@sakilacustomer.org          | 32    |
| jonathan.scarborough@sakilacustomer.org  | 18    |
| michael.silverman@sakilacustomer.org     | 29    |
| stanley.scroggins@sakilacustomer.org     | 30    |
| kristen.chavez@sakilacustomer.org        | 18    |
| cheryl.murphy@sakilacustomer.org         | 27    |
| rosa.reynolds@sakilacustomer.org         | 30    |
| cody.nolen@sakilacustomer.org            | 22    |
| leon.bostic@sakilacustomer.org           | 25    |
| harvey.guajardo@sakilacustomer.org       | 22    |
| darren.windham@sakilacustomer.org        | 24    |
| glenn.pullen@sakilacustomer.org          | 23    |
| earl.shanks@sakilacustomer.org           | 27    |
| jessie.milam@sakilacustomer.org          | 33    |
| stacey.montgomery@sakilacustomer.org     | 34    |
| leslie.gordon@sakilacustomer.org         | 22    |
| jennie.terry@sakilacustomer.org          | 29    |
| carmen.owens@sakilacustomer.org          | 26    |
| dawn.sullivan@sakilacustomer.org         | 26    |
| russell.brinson@sakilacustomer.org       | 36    |
| james.gannon@sakilacustomer.org          | 30    |
| casey.mena@sakilacustomer.org            | 34    |
| dolores.wagner@sakilacustomer.org        | 26    |
| jerry.jordon@sakilacustomer.org          | 29    |
| roger.quintanilla@sakilacustomer.org     | 36    |
| lucy.wheeler@sakilacustomer.org          | 26    |
| vera.mccoy@sakilacustomer.org            | 18    |
| robin.hayes@sakilacustomer.org           | 24    |
| dana.hart@sakilacustomer.org             | 29    |
| hector.poindexter@sakilacustomer.org     | 26    |
| ryan.salisbury@sakilacustomer.org        | 30    |
| martha.gonzalez@sakilacustomer.org       | 34    |
| nelson.christenson@sakilacustomer.org    | 20    |
| adam.gooch@sakilacustomer.org            | 22    |
| denise.kelly@sakilacustomer.org          | 27    |
| lonnie.tirado@sakilacustomer.org         | 18    |
| deanna.byrd@sakilacustomer.org           | 26    |
| alex.gresham@sakilacustomer.org          | 33    |
| pedro.chestnut@sakilacustomer.org        | 24    |
| leslie.seward@sakilacustomer.org         | 35    |
| cassandra.walters@sakilacustomer.org     | 30    |
| brenda.wright@sakilacustomer.org         | 26    |
| ramona.hale@sakilacustomer.org           | 30    |
| ashley.richardson@sakilacustomer.org     | 25    |
| audrey.ray@sakilacustomer.org            | 29    |
| marvin.yee@sakilacustomer.org            | 21    |
| jenny.castro@sakilacustomer.org          | 27    |
| rose.howard@sakilacustomer.org           | 22    |
| natalie.meyer@sakilacustomer.org         | 23    |
| loretta.carpenter@sakilacustomer.org     | 22    |
| ruben.geary@sakilacustomer.org           | 21    |
| marc.outlaw@sakilacustomer.org           | 30    |
| samuel.marlow@sakilacustomer.org         | 21    |
| rene.mcalister@sakilacustomer.org        | 26    |
| oscar.aquino@sakilacustomer.org          | 20    |
| violet.rodriquez@sakilacustomer.org      | 30    |

</details>

##### Mostrar el número de teléfono de la dirección que tiene el código postal más grande.

```sql
SELECT phone, postal_code
FROM address
WHERE postal_code = (SELECT MAX(postal_code) FROM address);
```

| phone        | postal_code |
| ------------ | ----------- |
| 934730187245 | 99865       |

##### Mostrar la dirección, el distrito y el nombre de la ciudad del primer cliente inactivo.

```sql
SELECT a.address,
       a.district,
       ci.city
FROM customer AS c
JOIN address AS a ON c.address_id = a.address_id
JOIN city AS ci ON a.city_id = ci.city_id
WHERE active = 0
LIMIT 1;
```

```markdown
| Address              | District | City            |
| -------------------- | -------- | --------------- |
| 360 Toulouse Parkway | England  | Southend-on-Sea |
```

