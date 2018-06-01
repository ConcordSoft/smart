import React, { Component } from 'react';
import UslugeNaslovna from '../images/smart-women.jpg';

var UslugeNaslovnaImg = {
	backgroundImage: `url(${UslugeNaslovna})`
};

export default class ContactPage extends Component {
	constructor(props) {
		super(props);
	}

	render () {
		return (

            <main>

		      <section className="usluge-first" style={ UslugeNaslovnaImg }></section>

		      <section className="usluge-second">
		          <div className="left-text">
		            <h1 className="usluge-title-orange">USLUGE</h1>
		            <h3><b>MARKETING</b> KONSALTING</h3>
		              <p>Svakoj kompaniji koja posluje u tržišnom okruženju imperativ je da razvija strategiju nastupa na tržištu kako bi se lakše prilagodila okruženju koje se konstantno menja, pridobila potrošača čija očekivanja konstantno rastu i borila se sa konkurencijom koja ima vrlo slična stremljenja! I sve to u digitalnoj eri, toliko specifičnoj za poslovanje svake kompanije!</p>
		              <p>SMART pomaže Vama i Vašoj kompaniji da analizira specifičnost tržišne situacije u kojoj se kompanija nalazi u datom trenutku i da kroz analizu Vaše kompanije i Vašeg brenda, analizu konkurencije i ostalih eksternih faktora, predlaže njen uspešan nastup na tržištu.</p>
		              <p>Kreiranje takvog sklopa proizvoda (ili usluge), cene, promocije i distribucije, koji će imati potencijal da zauzme tržišni prostor, razvije postojeći, ili preuzme konkurentski, prava je marketinška umetnost. Kao i svaka umetnost, i ova je istovremeno i lepa i teška. I na kraju, ali ne i najmanje bitno - budžetski osetljiva. Zato Smart nudi niz rešenja za prevazilaženje ovih izazova!</p>
		          </div>
		          <div className="right-text">
		            <p><b>SMART</b> pruža sledeće usluge:</p>
		              <ul className="list-usluge">
		                <li><i className="fas fa-square-full"></i><span>Kreiranje marketing strategija</span> (definisanje strateških ciljeva klijenata, poslovnih strategija za njihovo ostvarivanje, definisanje misije, vizije, marketing taktika i operativnih planova za njenu realizaciju)</li>
		                <li><i className="fas fa-square-full"></i><span>Realizaciju</span> (planiranje, vođenje, kontrolu i izveštavanje) <span>svih planiranih marketing strategija</span></li>
		                <li><i className="fas fa-square-full"></i><span>Kreiranje biznis portfolia</span></li>
		                <li><i className="fas fa-square-full"></i><span>Kreiranje metoda unapređenja prodaje</span></li>
		                <li><i className="fas fa-square-full"></i><span>Media buying</span></li>
		                <li><i className="fas fa-square-full"></i><span>Dizajniranje svih promotivnih sredstava</span></li>
		                <li><i className="fas fa-square-full"></i><span>Produkciju</span> (TV, web, radio, print)</li>
		              </ul>
		          </div>
		      </section>

	      <section className="clearfix usluge-third">
	        <div className="slika"><img src="/img/mediji.png" /></div>
	        <h3><b>MEDIA</b> BUYING</h3>
	        <div className="media-div">
			        <div className="col-width1">
			          <p>U SVETU MEDIJA “PLIVAMO” VEĆ 10 GODINA I HRABRO I USPEŠNO ZA SVOJE KLIJENTE REALIZUJEMO POSTAVLJENE CILJEVE!</p>
			          <p>Odabir pravog medijskog miksa, koji će klijentu doneti očekivane rezultate kampanje, oduvek je bila prava umetnost, a u današnje vreme dominacije novih, digitalnih medija i gotovo “personalizovane” medijske scene gde su često pojedinci značajniji prenosioci poruka nego mas mediji, media buying postaje još veći izazov!</p>
			        </div>
			        <div className="col-width2">
			          <p>Smart agency ima odličnu saradnju sa svim segmentima medija, kako sa tradicionalnim (nacionalne, regionalne i lokalne TV i radio stanice), štampanim medijima (magazini, dnevne novine), Out of Home provajderima (bilbord i city lighs provajderi, provajderi oglašavanja na vozilima i ostalim javnim površinama), tako i sa novim medijima (news portali, life- style portali i sl), i na kraju, ali ne i najmanje bitno- svoj tim za rad na društvenim mrežama. Paralelno, Smart agency sarađuje i sa najvećim regionalnim i internacionalnim media buying agencijama.</p>
			        </div>
			        <div className="col-width3">
			          <p>Kako dopreti do potrošača moderne generacije, kako u miksu društvenih mreža odabrati onu koja će omogućiti najveći stepen interakcije sa potrošačima i najveći uticaj, da li i koliko digitalno oglašavanje na web- u ima smisla i efekata i kako sve to kombinovati sa oglašavanjem na TV- u, radiju i printu- naš je posao i zadatak kojim vladamo!</p>
			        </div>
			</div>
	      </section>

	      <section className="usluge-four">
	        <div className="slika"><img src="/img/slika-sladoled.png" /></div>
	        <div className="media-div1">
		        <div className="col-width-ice1">
		            <h3><span className="one">A</span><span className="two">R</span><span className="three">t</span>, KREACIJA, DIZAJN</h3>
		            <p>Vizuelni identitet Vaše firme, novu vizuelizaciju kompanije ili proizvoda, logotip, originalan korporativni materijal, predstavlja kreativni izazov za SMART dizajn tim. SMART kreacije uvek su spoj jasne poslovne poruke i umetničkog izraza.</p>
		        </div>
		        <div className="col-width-ice2">
		          <p><b>SMART</b> pruža sledeće usluge:</p>
		          <ul>
		            <li>Grafički dizajn korporativnog paketa (logo firme ili brenda, knjiga grafičkih standarda, poslovni materijali…)</li>
		            <li>Dizajn i razvoj proizvoda (dizajn ambalaže, etiketa, celokupnog proizvoda…)</li>
		            <li>Dizajn ATL promotivnih sredstava (bilborda i raznih promotivnih sredstava za OOH oglašavanje, oglasa za štampane ili digitalne medije, za društvene mreže itd)</li>
		            <li>Dizajn BTL promotivnih sredstava (krupnog I “sitnog” POS materijala, kataloga, flajera…)</li>
		            <li>Web dizajn</li>
		            <li>Dizajn štandova i ostalih nastupa kompanije na poslovnim manifestacijama</li>      
		          </ul>
		        </div>
		    </div>
	      </section>

	      <section className="clearfix usluge-five media-div1">
	          <div className="image-absolute col-width-ice1"><img src="/img/www.png" /></div>
	          <div className="right-col col-width-ice1">
	            <div className="col-top">
	                <h3><b>WEB & SOCIAL</b> MEDIA</h3>
	                <p>Naše iskustvo u oblasti web dizajna, kao i konstantno prilagođavanje novim trendovima i dostignućima, omogućava nam da klijentima ponudimo profesionalne SMART usluge i kvalitetna dizajnerska rešenja. Imati kvalitetan, sadržajan i vizuelno dopadljiv sajt - obećavajuće je za Vaš biznis.</p>
	                <p>SMART tim uspešno brine o vašem imidžu na društvenim mrežama, od kreiranja postova, tekstova, komunikacije za influenserima do analitike.</p>
	            </div>
	            <div>
	              <p><b>SMART</b> pruža sledeće usluge:</p>
	              <ul>
	                <li><span>Idejno planiranje strukture sajta</span></li>
	                <li><span>Web dizajn</span></li>
	                <li><span>Programiranje</span></li>
	                <li><span>Optimizacija sajta za pretraživače</span></li>    
	                <li><span>Podrška i održavanje sajta</span></li>    
	                <li><span>Društvene mreže</span></li>         
	              </ul>
	            </div>
	          </div>
	      </section>

	      <section className="usluge-six media-div1">
	          <div className="col-width-ice1">
	            <div className="col-top">
	                <h3><b>ORGANIZACIJA</b> DOGAĐAJA</h3>
	                <p>Kako najefektnije da organizujete sajamski nastup, promociju, svečanost, poslovni koktel? SMART kreativni tim uspešno realizuje Vaš special event – od pozivnica, dekoracije, izbora menija, pratećeg programa, do posećenosti i medijske podrške. SMART planira, osmišljava i realizuje svaki detalj . O Vama će da se priča…</p>
	            </div>
	            <div>
	              <p><b>SMART</b> pruža sledeće usluge:</p>
	              <ul>
	                <li><span>Sajamski nastupi</span></li>
	                <li><span>Promocije</span></li>
	                <li><span>Svečanosti</span></li>
	                <li><span>Važni datumi</span></li>    
	                <li><span>Sponzorstva</span></li>           
	              </ul>
	            </div>
	          </div>

	          <div className="image-baloni col-width-ice2"><img src="/img/baloni.png" /></div>
	      </section>

	      <section className="usluge-seven media-div1">
	          <div className="image-absolute col-width-ice1"><img src="/img/poruka.png" /></div>
	          <div className="right-col col-width-ice2">
	            <div className="col-top">
	                <h3><b>PR &</b> COPYWRITING</h3>
	                <p>Dobra reputacija Vašeg biznisa je osnovni zadatak PR-a. Postoji mnogo SMART načina da javnost o Vama razmišlja baš onako kako Vi želite. Uspeh Vašeg biznisa zavisi od interpretacije Vaših ciljeva i rezultata. SMART rešenjima izdvojićete se od konkurencije, bićete interesantni i za javnost, i za medije.</p>
	                <p>Copywriting je jedan od esencijalnih elemenata marketinga. Bez obzira na to da li želite da prodajete, lobirate, promovišete, ubeđujete…potrebne su Vam SMART “priče” koje intrigiraju pažnju ljudi od čijeg stava zavisi Vaš biznis.</p>
	            </div>
	            <div>
	              <p><b>SMART</b> pruža sledeće usluge:</p>
	              <ul>
	                <li><span>Planiranje i realizacija PR kampanja</span></li>
	                <li><span>Kreiranje jedinstvenih ideja za kampanje</span></li>
	                <li><span>Kreiranje slogana i hedlajna</span></li>
	                <li><span>PR tekstovi, novinski članci, tekstovi za kataloge, web sajtove...</span></li>           
	              </ul>
	            </div>
	          </div>
	      </section>

	      <section className="usluge-six media-div1">
	          <div className="col-width-ice1">
	            <div className="col-top">
	                <h3><b>PRODUKCIJA</b></h3>
	                <p>Pametno osmišljena i umetnički oblikovana medijska poruka osnovni je zadatak SMART produkcijskog tima.</p>
	            </div>
	            <div>
	              <p><b>SMART</b> pruža sledeće usluge:</p>
	              <ul>  
	                <li><span>PRODUKCIJA TV SPOTOVA</span></li>   
	                <li><span>PRODUKCIJA KORPORATIVNIH FILMOVA</span></li>   
	                <li><span>PRODUKCIJA RADIO REKLAMA</span></li>   
	                <li><span>PRODUKCIJA SADRŽAJA ZA PRINT OGLAŠAVANJE</span></li>   
	                <li><span>PRODUKCIJA SADRŽAJA ZA WEB / DRUŠTVENE MREŽE (VIDEO, GIFF, ANIMIRANIH, GRAFIČKIH)</span></li>           
	              </ul>
	            </div>
	          </div>

	          <div class="image-mediji col-width-ice2"><img src="/img/mediji-cartoon.png" /></div>
	      </section>

            </main>
        )
    }

}