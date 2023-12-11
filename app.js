let list = {
    category: [
        "ticket number",
        "passenger name",
        "flight number",
        "departure airport",
        "arrival airport",
        "departure date",
        "arrival date",
        "departure time",
        "arrival time",
        "seat number"
    ],
    task: [
        "ticket_number",
        "passenger_name",
        "flight_number",
        "departure_airport",
        "arrival_airport",
        "departure_date",
        "arrival_date",
        "departure_time",
        "arrival_time",
        "seat_number"
    ]
    //category.length = task.length = data[i].length (∀ i<task.length)
};

let data = [
    ["5173564784","Chandra Littell","DL789","ISE","PEE","12/13/2022","1/4/2022","11:24 PM","12:34 PM","A1"],
    ["8860011029","Blaine Mell","UA456","OZC","PCJ","4/8/2022","5/27/2022","3:53 PM","10:30 PM","B2"],
    ["4360434091","Estel Soloway","DL789","UPG","YPR","7/4/2022","8/23/2022","9:20 AM","5:37 PM","A1"],
    ["4486222158","Anatollo Cussen","DL789","AJS","TAF","6/21/2022","9/20/2022","6:54 AM","9:38 AM","B2"],
    ["6088913040","Clio Davidsson","UA456","AZB","JUT","6/15/2022","11/8/2022","12:37 AM","10:40 AM","C3"],
    ["7409852226","Alena Golledge","DL789","JMK","YXP","10/24/2022","3/2/2022","10:14 PM","5:58 PM","C3"],
    ["3240205211","Danya Bagott","DL789","RJI","ECV","3/27/2022","5/31/2022","9:09 PM","1:05 AM","A1"],
    ["1249641643","Raphael Vickarman","UA456","SAE","QSN","8/17/2022","9/15/2022","2:50 PM","10:41 AM","A1"],
    ["1619979311","Lovell Fitzjohn","AA123","KGJ","VIB","7/2/2022","6/9/2022","3:21 AM","6:24 PM","B2"],
    ["2006267975","Loydie Dell Casa","AA123","TPJ","QRY","2/22/2022","2/12/2022","5:04 PM","1:09 AM","A1"],
    ["5687761872","Robby Arnold","AA123","OSD","PYH","2/23/2022","3/19/2022","9:31 AM","2:10 PM","A1"],
    ["3735090307","Allan Petheridge","DL789","GHA","YWP","12/18/2022","2/12/2022","12:23 PM","3:41 PM","C3"],
    ["9977836337","Oona Cornau","UA456","FAB","SHN","2/23/2022","5/31/2022","1:47 AM","11:49 AM","B2"],
    ["9985432041","Camey Duer","AA123","PMD","WFB","5/5/2022","8/27/2022","6:58 PM","6:06 PM","B2"],
    ["9614831402","Lise Simenon","AA123","JSH","BIY","9/3/2022","11/13/2022","10:11 PM","7:06 AM","A1"],
    ["4815353316","Tibold Bedham","DL789","WAV","OJC","3/22/2022","1/13/2022","8:50 AM","1:02 AM","A1"],
    ["5766443155","Rurik Chinge","AA123","PNT","BBP","10/4/2022","3/29/2022","10:24 AM","1:00 AM","C3"],
    ["3478428632","Darrick Demann","UA456","DMO","YCC","2/27/2022","11/24/2022","5:17 PM","5:38 AM","B2"],
    ["1265209554","Cammi Bonnin","UA456","STN","HMY","1/17/2022","4/26/2022","4:43 PM","9:51 PM","B2"],
    ["3339764008","Gladi Ivie","DL789","NZH","TMW","5/17/2022","7/3/2022","1:14 AM","12:48 PM","B2"],
    ["8522086166","Alano Georg","AA123","NEK","UTW","12/19/2022","5/7/2022","5:01 AM","12:51 PM","B2"],
    ["4005500213","Yule Miliffe","DL789","HHN","BXT","11/7/2022","6/23/2022","1:53 AM","11:55 AM","C3"],
    ["5302108779","Gusta Kaes","AA123","XYA","RPB","12/3/2022","10/25/2022","3:56 AM","4:02 AM","B2"],
    ["3454533008","Merna Dinzey","AA123","YVQ","WSH","1/2/2022","3/18/2022","6:08 PM","12:48 AM","B2"],
    ["7469583753","Roldan Lukasen","UA456","ZTU","BOF","9/9/2022","8/7/2022","4:39 PM","12:16 AM","B2"],
    ["7389421883","Edvard Wolsey","UA456","OVE","TTA","9/6/2022","4/4/2022","2:26 PM","3:28 AM","A1"],
    ["6846135833","Giordano Frayne","UA456","RUY","VSF","1/20/2022","2/24/2022","12:25 PM","2:20 AM","B2"],
    ["7342551881","Robbie Rey","UA456","PKR","SOQ","11/8/2022","12/24/2022","4:28 PM","11:06 PM","A1"],
    ["8541043245","Deedee Wyrill","DL789","ATZ","KEI","10/4/2022","9/11/2022","8:38 AM","10:43 AM","C3"],
    ["3326578670","Astra Mc Elory","DL789","VLG","HBU","3/25/2022","4/8/2022","2:06 PM","1:32 AM","A1"],
    ["6025696673","Rosetta Pezey","AA123","YAG","MNG","1/16/2022","10/19/2022","6:03 AM","8:16 PM","C3"],
    ["7895021195","Collette Peres","DL789","MVF","YGJ","7/5/2022","4/29/2022","2:57 AM","12:48 AM","C3"],
    ["7742126882","Jefferson Benit","DL789","UMS","SVS","8/12/2022","6/4/2022","7:53 PM","1:49 AM","C3"],
    ["6789299471","Mile Furtado","UA456","ABD","UBP","8/26/2022","6/21/2022","10:37 PM","4:27 PM","B2"],
    ["2591392413","Alexandr Tamblyn","DL789","ESF","ZHI","1/21/2022","10/25/2022","6:52 PM","6:45 PM","C3"],
    ["8543713117","Donielle Corro","UA456","EAE","CMS","9/14/2022","1/14/2022","8:11 PM","9:01 PM","A1"],
    ["3063633055","Christa Gleave","AA123","YRA","EED","7/2/2022","8/31/2022","6:57 PM","3:13 PM","C3"],
    ["1817478726","Melly Sebright","UA456","BLN","BGW","5/27/2022","4/10/2022","3:23 AM","6:08 AM","B2"],
    ["4185476692","Read Burfield","AA123","XYE","YDE","12/14/2022","9/13/2022","4:14 PM","11:22 AM","C3"],
    ["7070688065","Karita Dignall","UA456","ESO","UYL","10/31/2022","5/11/2022","12:33 PM","3:15 PM","B2"],
    ["5052712386","Amalea Lehenmann","DL789","PVF","PMC","10/23/2022","9/22/2022","3:21 PM","6:34 AM","A1"],
    ["8726075480","Shamus Grassi","AA123","MVT","SFT","5/1/2022","12/26/2022","12:01 PM","7:26 PM","A1"],
    ["9253627813","Sadella Galsworthy","AA123","YSF","DYW","2/14/2022","8/8/2022","8:18 PM","3:03 PM","B2"],
    ["9931959483","Reid Oen","UA456","YZR","TMY","1/30/2022","7/27/2022","12:36 PM","6:54 PM","B2"],
    ["2921234520","Jephthah Anger","DL789","0","EVH","1/6/2022","3/7/2022","6:26 PM","2:29 AM","A1"],
    ["4349929574","Jodee Bittany","UA456","MCF","PZE","4/26/2022","5/27/2022","9:00 PM","2:47 AM","A1"],
    ["4874695704","Dallon Eldon","UA456","IXR","RMD","7/13/2022","4/7/2022","9:45 PM","12:58 AM","A1"],
    ["1641127901","Bobbe Cockren","UA456","GTR","YOT","8/6/2022","12/21/2022","10:38 AM","8:19 AM","A1"],
    ["2394984477","Mick Leith-Harvey","AA123","KOW","WIR","5/22/2022","2/8/2022","9:33 AM","12:38 AM","B2"],
    ["5344957420","Moshe Manilove","UA456","SOX","BHD","6/2/2022","12/26/2022","2:06 AM","8:57 PM","A1"],
    ["7890627747","Lavinie Long","AA123","CKZ","GGC","12/2/2022","11/13/2022","9:27 AM","11:40 PM","C3"],
    ["5175164206","Selina Bryson","AA123","CHH","YEO","12/1/2022","11/20/2022","1:06 PM","5:43 AM","B2"],
    ["6944525258","Isidora Clay","UA456","DOA","SLJ","3/13/2022","11/16/2022","8:33 PM","4:41 PM","A1"],
    ["1074946970","Dionis Wong","DL789","FIL","NDE","8/19/2022","9/1/2022","4:54 AM","10:38 AM","A1"],
    ["8375347127","Celinka Ferrolli","UA456","OSF","DBQ","1/31/2022","4/15/2022","8:33 AM","1:54 PM","B2"],
    ["7328493358","Sheffy Winthrop","AA123","AUZ","ULG","9/13/2022","8/22/2022","2:13 PM","1:03 PM","A1"],
    ["1691781023","Brooks Sperwell","UA456","MVE","CPV","9/23/2022","8/13/2022","8:32 PM","11:33 PM","A1"],
    ["1686785505","Kip Scoffham","DL789","NHA","CRB","7/10/2022","2/1/2022","6:29 PM","3:54 PM","A1"],
    ["9837096299","Sargent Stuart","DL789","PLU","XSI","4/27/2022","6/30/2022","6:33 AM","8:43 AM","C3"],
    ["9164094045","Clary Dawby","UA456","WCH","YYJ","12/24/2022","5/27/2022","5:29 AM","10:15 PM","B2"],
    ["5516722158","Marsh Arstingall","UA456","TGQ","EVM","9/16/2022","9/30/2022","3:47 AM","10:12 PM","A1"],
    ["4860188779","Bax Bengough","AA123","CGO","PBR","3/14/2022","9/24/2022","1:21 PM","9:03 AM","B2"],
    ["4142552567","Regine Caudrey","UA456","ZFU","KBD","8/17/2022","10/28/2022","6:22 PM","4:58 AM","C3"],
    ["3546300141","Toddy Jouhning","DL789","OMB","FXE","11/8/2022","9/7/2022","9:23 PM","1:12 PM","B2"],
    ["2396871510","Joby Owers","UA456","MTT","TJS","2/3/2022","10/13/2022","7:11 AM","4:09 AM","A1"],
    ["6287612854","Peta Biaggetti","DL789","VOZ","ATH","5/12/2022","8/8/2022","10:02 PM","1:54 AM","A1"],
    ["1797180042","Mora Tuft","AA123","ZNA","UIT","2/19/2022","6/17/2022","12:35 AM","1:58 PM","B2"],
    ["7144836774","Dorice Mollen","AA123","GOB","LWM","2/8/2022","3/8/2022","12:29 PM","12:46 PM","B2"],
    ["6039247676","Lissa Whittington","AA123","KUU","PLP","1/12/2022","9/22/2022","6:00 AM","3:55 PM","C3"],
    ["6272070052","Lindsy Nerne","DL789","ECG","VSK","2/26/2022","1/23/2022","8:37 AM","5:16 PM","B2"],
    ["3448064931","Jaclin Barnewell","AA123","RPR","AHE","7/2/2022","8/18/2022","9:49 AM","6:10 AM","C3"],
    ["9107401878","Zahara Jandac","AA123","MJI","UDA","3/25/2022","12/10/2022","12:05 AM","1:33 AM","A1"],
    ["3787481596","Maiga Gregs","DL789","NEK","MHR","12/12/2022","3/2/2022","1:15 PM","4:55 AM","B2"],
    ["2073556770","Normand Saunderson","DL789","AAA","HTT","8/29/2022","7/18/2022","11:25 AM","7:14 PM","B2"],
    ["7761037142","Lukas Bonafacino","DL789","CZC","URU","8/2/2022","7/5/2022","2:20 PM","10:11 AM","A1"],
    ["9440604992","Lainey Stenton","AA123","MJR","PBM","4/24/2022","4/5/2022","2:52 AM","12:57 PM","B2"],
    ["4726256675","Annadiana Beever","AA123","0","SAG","7/28/2022","5/2/2022","9:07 AM","3:41 PM","A1"],
    ["9427878022","Cinderella Sustin","AA123","GGO","AMV","1/13/2022","5/12/2022","4:04 AM","1:00 PM","C3"],
    ["6096188143","Tildie Keneforde","AA123","JQA","SYD","2/6/2022","10/17/2022","6:56 PM","6:17 AM","C3"],
    ["1262792958","Christan Balducci","AA123","ZLR","ILO","11/12/2022","3/1/2022","4:05 AM","10:44 AM","B2"],
    ["9692804054","Milicent Binyon","AA123","WSZ","SFN","11/6/2022","6/2/2022","11:52 PM","9:05 AM","A1"],
    ["7716665964","Kenyon Prydden","UA456","TMT","0","3/16/2022","9/6/2022","4:29 PM","2:05 AM","B2"],
    ["2205382020","Kikelia Amberson","UA456","KME","OER","4/21/2022","3/12/2022","9:50 PM","3:42 PM","C3"],
    ["6564165788","Dana Mertgen","DL789","BDV","WWK","12/15/2022","9/21/2022","10:50 PM","5:39 AM","A1"],
    ["5231137472","Darrin Woolston","UA456","MTY","LFT","1/2/2022","7/18/2022","6:56 AM","3:06 PM","A1"],
    ["5154486300","Guillaume Janecek","DL789","CRM","CLY","9/30/2022","10/30/2022","12:56 AM","11:41 AM","A1"],
    ["7217551805","Herta Simner","DL789","LSV","PPW","4/25/2022","1/15/2022","10:40 PM","10:39 AM","C3"],
    ["1195847089","Karlee McNair","AA123","TEG","BJH","11/4/2022","11/16/2022","1:06 PM","10:09 AM","A1"],
    ["2217445305","Arabela Snepp","DL789","EBJ","VAF","3/6/2022","1/6/2022","6:50 PM","4:10 AM","C3"],
    ["4277815546","Jenica Rooke","AA123","PPX","RVD","1/28/2022","4/19/2022","7:25 AM","3:34 AM","C3"],
    ["3094108968","Annabela Congdon","UA456","OFK","REX","10/8/2022","6/27/2022","10:02 AM","9:21 PM","A1"],
    ["3248655744","Estel Attwool","DL789","PPT","CJM","11/8/2022","1/6/2022","7:39 AM","3:23 PM","C3"],
    ["6108748375","Elwyn Farmiloe","AA123","TPX","RZZ","3/19/2022","5/12/2022","5:01 PM","1:06 AM","C3"],
    ["1664340446","Aleen Lydford","AA123","AFK","CNC","9/2/2022","9/1/2022","8:04 PM","4:44 PM","A1"],
    ["1730515181","Lanny Dillway","UA456","BZL","GNY","10/22/2022","6/10/2022","6:40 AM","6:36 PM","A1"],
    ["6644377715","Janetta Humphries","UA456","AJJ","ODD","12/16/2022","2/8/2022","1:46 PM","2:08 AM","B2"],
    ["5519451555","Nealson Reede","UA456","KMH","DME","2/7/2022","3/15/2022","3:10 PM","1:10 AM","B2"],
    ["3144812886","Keir Grewer","AA123","SFT","GLN","12/6/2022","1/7/2022","9:20 PM","6:06 AM","C3"],
    ["5630695029","Iormina Vannoni","UA456","LGK","CYA","12/15/2022","9/28/2022","5:29 AM","12:08 AM","C3"],
    ["6662613813","Jdavie Lukins","AA123","BOV","IZT","7/2/2022","8/9/2022","8:33 AM","7:39 PM","A1"],
    ["1020304049","Ofelia Frawley","AA123","IZA","MSO","9/30/2022","12/2/2022","11:16 AM","10:11 AM","A1"],
    ["7291136563","Roxy Guyon","DL789","JAX","OUR","6/20/2022","7/18/2022","10:44 AM","6:52 AM","B2"],
    ["4853393458","Lani McCue","AA123","BHV","MKG","7/5/2022","7/23/2022","1:13 PM","10:35 PM","C3"],
    ["4411898520","Toddy D'Costa","UA456","JLA","WBM","6/8/2022","5/1/2022","9:48 AM","11:53 PM","C3"],
    ["5101240268","Grethel Coggon","AA123","OSI","QDY","10/10/2022","9/8/2022","1:46 AM","10:39 AM","B2"],
    ["1168520200","Sonny Pithcock","DL789","MLG","XIG","9/13/2022","6/12/2022","1:23 PM","11:28 AM","A1"],
    ["7838810749","Francklyn O'Hingerty","UA456","FIK","ZSS","4/20/2022","6/14/2022","3:28 PM","6:33 AM","C3"],
    ["1943638086","Carma Hathway","AA123","BXW","IXP","6/10/2022","12/14/2022","4:54 AM","12:02 AM","A1"],
    ["1486017616","Leland Inglefield","AA123","UZU","WSA","12/17/2022","8/5/2022","11:00 AM","9:30 AM","C3"],
    ["7459690773","Roxanna Rainy","AA123","CNF","KDL","5/5/2022","11/6/2022","5:25 PM","11:01 AM","B2"],
    ["3200300895","Grissel Heaphy","UA456","LLX","UIK","9/25/2022","8/9/2022","5:09 AM","1:05 AM","A1"],
    ["2477164415","Bryant Godley","DL789","ADF","BIB","3/28/2022","10/18/2022","3:42 AM","9:18 AM","A1"],
    ["6214822181","Piper Noonan","AA123","EYL","LRE","6/12/2022","9/2/2022","6:53 AM","6:10 PM","B2"],
    ["1228196573","Talyah Mattosoff","AA123","MNM","CHA","1/1/2022","2/9/2022","7:53 AM","1:47 AM","C3"],
    ["6974041846","Erik Keeffe","UA456","YKD","KGF","7/22/2022","12/10/2022","1:29 AM","11:54 PM","A1"],
    ["6619712759","Cynthy Riddington","UA456","IFJ","GST","3/1/2022","2/16/2022","7:14 PM","5:43 AM","A1"],
    ["2526569904","Lorne Anstey","UA456","UMU","LDS","7/4/2022","2/18/2022","10:30 PM","1:30 PM","A1"],
    ["5686250955","Atlante Doutch","AA123","TCT","WLO","6/15/2022","12/15/2022","4:33 AM","6:54 AM","C3"],
    ["2283885260","Chariot Wrankmore","UA456","BVP","YWQ","7/28/2022","9/19/2022","3:37 PM","10:13 AM","B2"],
    ["4213078384","Kerwinn Winyard","DL789","VJQ","RME","11/29/2022","1/24/2022","9:32 AM","7:33 AM","C3"],
    ["4793708787","Avrom Hammelberg","UA456","TNB","PAA","4/13/2022","4/17/2022","1:20 PM","9:19 PM","B2"],
    ["9311028302","Kesley Pawden","DL789","MKE","HUQ","7/21/2022","7/13/2022","9:09 PM","10:11 PM","A1"],
    ["5992396832","Edvard Billborough","AA123","SXV","MON","5/29/2022","7/22/2022","3:04 PM","1:51 AM","C3"],
    ["1325830164","Louella Beddall","UA456","XNA","YOA","2/25/2022","3/10/2022","3:18 PM","11:33 AM","A1"],
    ["2949078489","Ingrid Grzelak","DL789","HTU","SLV","9/21/2022","12/21/2022","12:29 AM","3:24 PM","A1"]
    // mockaroo s1
];

// Render search menu & searching categories 

const search_box = document.querySelector("#search-box");
for (let i in list.category) {
    let cell = document.createElement("div");
    cell.classList.add("cell");

    let cell_p = document.createElement("div");
    cell_p.innerText = list.category[i];
    cell_p.classList.add("cell_p");
    cell.appendChild(cell_p);

    let cell_i = document.createElement("input");
    cell_i.setAttribute("id", list.task[i]);
    cell.appendChild(cell_i);

    search_box.appendChild(cell);
}

// Render items

function render_item() {
    const item_box = document.querySelector("#item-box");
    for (let i in data) {
        let card = document.createElement("div");
        card.classList.add("card");

        let number = document.createElement("div");
        number.classList.add("number");
        number.setAttribute("id", data[i][0]);
        number.innerText = data[i][0];
        card.appendChild(number);

        item_box.appendChild(card);
    }
}
render_item();

// Check if 2 string equal

function min(a, b){
    if (a>b) return b;
    else return a;
}

function check(a, b) {
    let mk = min(a.length, b.length);
    for (let i=0; i<mk; i++) {
        if (a[i] != b[i]) return false;
    }
    return true;
}

// Remove unsuitable items

const checkB = document.getElementById('check');
checkB.addEventListener('click', (event) => {
    event.preventDefault();
    let input = [];
    let cont = false;
    for (let i in list.task) {
        let taskId = list.task[i];
        input[i] = document.getElementById(taskId).value;
        for (let j in data) {
            let itemD = document.getElementById(data[j][0]);
            if (!check(input[i], data[j][i]) && input[i]!='') { 
                if (itemD) {itemD.remove(); cont = true;}
            } else if (itemD ) cont = true;
        } 
    }
    if (cont == false) {
        let msg = document.getElementById("msg");
        msg.innerText = "Can't find ticket with suitable info!"
    } else {
        let msg = document.getElementById("msg");
        msg.innerText = ""
    }
    console.log(cont);
});

// Reset data

const checkR = document.getElementById('reset');
checkR.addEventListener('click', (event) => {
    event.preventDefault();
    for (let i in data) {
        let itemD = document.getElementById(data[i][0]);
        if (itemD) itemD.remove();
    } 
    render_item();
});