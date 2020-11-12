function parallax(element,height,speed){
    let thing=document.querySelector(element);
    thing.style.transform=`translateY(${height*speed}px)`;
}
window.addEventListener("scroll",()=>{
    parallax(".intro",window.scrollY,1);
});

teams=["Chassis","Electrical","Management","Vehicle Dynamics","Drivetrain","Aero, Body & Cooling","Brakes","Engine","Composite","Electrical"];
class_name=["chassis","electrical","management","dynamics","drive-train","aero","brakes","engine","composite","electrical18"];
chassis="Chassis subteam is responsible for the design and manufacturing of spaceframe chassis, driver's ergonomics, seat, driver harness system and headrest. Subteam also manufactures the chassis in-house. Recent developments include ergonomics setup and machined rear bulkhead. Design of custom impact attenuator is also in development."
electrical="Electrical subteam is responsible for the design and assembly of every electrical/electronics component in the vehicle. It is further divided into High Voltage and Low Voltage systems. The subteam uses softwares like Autodesk EAGLE, Proteus Design Suite, NI Multisim, Solidworks for designing purposes. It is therefore their responsibility that our Formula prototype race car gets enough juice to conquer the tracks."
management="Management subteam is responsible for ensuring proper flow of funds, maintaining social and corporate relations. The subteam also acts as a bridge between the team and the alumni. Basically, it is the face of the team. It ensures that proper marketing is provided to all the sponsors and supporters. Smooth functioning of the team is also the responsibility of the subteam. "
dynamics="Vehicle Dynamics subteam deals with the forces and their response on the vehicle. Vehicle Dynamics is mainly concerned with 3 systems.... Steering system, Suspension system and Wheels & Tyres. The subteam designs the suspension parts like hub, wheel upright etc. and the tyres are selected based on the requirements and are installed in vehicle considering various wheel alignment parameters."
drivetrain="Drivetrain subteam is responsible for transferring the torque produced by the motor/engine to the wheels in order to make the car go. The torque that is produced by the motor/engine is transferred to the differential. The purpose of the differential is to transfer the available power to the slowest spinning axel. This allows the car to gain better traction. The differential is purely a mechanical design which responds extremely quick to slippage with minimal energy loss. From the axles, the power is then transferred to the wheel."
aero="Aero, Body & Cooling subteam is a combination of aerodynamics, body works and cooling system. Aerodynamics help the vehicle go faster and achieve better lap times. The subteam performs CFD simulations to optimize the drag and downforce acting on the vehicle. The subteam also deals with the design and manufacturing of composite parts such as nose cone and other body works. The subteam has also started research on CFRP rims and composite accumulator container. It also ensures that all components are under optimum temperature, basically the subteam looks into the thermal management of the vehicle."
brakes="Brakes subteam plays one of the most important role in any kind of Formula team and same is the case with the brakes subteam of Team Srijan. Motive of the subteam is to provide the team with a reliable braking system that has the power to stop the vehicle and decelerate in extreme conditions. Designing is a major focus point along with some handsome calculations that guide team's component manufacturing and component selection. Designing include design of rotor and various pedals, whereas components are selected on the basis of calculations and requirement of the vehicle. Softwares used in designing and testing the components include Solidworks, Ansys."
engine="Engine being the heart of the vehicle was most crucial for the performance of the vehicle. Engine Subteam was responsible for the design of intake ,exhaust ,cooling and fuel supply system. The team used a KTM Duke 390 Engine,the subteam also used a PE3 ecu for tuning the engine, the intake and exhaust system were custom designed using the Ricardo WAVE.The intake was 3-d printed making it extremely lightweight and air tight and the exhaust was designed to meet the sound limits but still not robbing us of horsepower. Also the subteam designed the radiator for keeping the engine cool & revv happy.";
composite="Composite subteam deals with the design and manufacturing of composite parts such as nose cone and other body works.";
electric18="Electrical subteam is responsible for the design and assembly of every electrical/electronics component in the vehicle. The subteam uses softwares like Autodesk EAGLE, Proteus Design Suite, NI Multisim, Solidworks for their designing purposes."
content=[chassis,electrical,management,dynamics,drivetrain,aero,brakes,engine,composite,electric18];
modal=document.querySelector(".de");
foot=document.querySelector("footer");
clicks=document.querySelectorAll(".team-container");
team=document.querySelector(".team");
subteams=document.querySelector(".sub-teams")
// console.log(clicks);
let currclick="";
me=document.querySelector(".me");
ma=document.querySelector(".ma");
el=document.querySelector(".ele");
clicks.forEach(click=>{
    click.addEventListener("click",()=>{
        modal.classList.add("open");
        modal.classList.remove("close");
        if(currclick=="me")
        {
        me.classList.add("close");
        me.classList.remove("open");
        }
        if(currclick=="ma")
        {
        ma.classList.add("close");
        ma.classList.remove("open");
        }
        if(currclick=="el")
        {
        el.classList.add("close");
        el.classList.remove("open");
        }
        // team.classList.add("close");
        // team.classList.remove("open");
        index=class_name.indexOf(click.classList[0]);
        heading=document.querySelector(".de h1");
        inf=document.querySelector(".de p");
        heading.textContent=teams[index];
        inf.textContent=content[index];
})
});

b=document.querySelectorAll(".tc .te");
b.forEach(b1=>{
b1.addEventListener("click",()=>{
        me.classList.add("open");
        me.classList.remove("close");
        team.classList.add("close");
        currclick="me";
        team.classList.remove("open");
        foot.classList.add("close");
        foot.style.display="none";
        foot.classList.remove("open");
})
})
c=document.querySelectorAll(".tc .man");
c.forEach(c1=>{
c1.addEventListener("click",()=>{
        ma.classList.add("open");
        ma.classList.remove("close");
        currclick="ma";
        team.classList.add("close");
        team.classList.remove("open");
        foot.classList.add("close");
        foot.style.display="none";
        foot.classList.remove("open");
})
})
d=document.querySelectorAll(".tc .el");
d.forEach(d1=>{
d1.addEventListener("click",()=>{
        el.classList.add("open");
        el.classList.remove("close");
        currclick="el";
        team.classList.add("close");
        team.classList.remove("open");
        foot.classList.add("close");
        foot.style.display="none";
        foot.classList.remove("open");
})
})
me.addEventListener("click",(e)=>{
    // console.log(e.path);
    if(!e.target.classList.contains("members") && !e.target.classList.contains("a") && !e.target.classList.contains("name"))
    {
    console.log(e);
    me.classList.add("close");
    me.classList.remove("open");
    team.classList.add("open");
    team.classList.remove("close");
    foot.classList.add("open");
    foot.classList.remove("close");
    foot.style.display="block";
    }
});
ma.addEventListener("click",(e)=>{
    // console.log(e.path);
    if(!e.target.classList.contains("members") && !e.target.classList.contains("a") && !e.target.classList.contains("name"))
    {
    console.log(e);
    ma.classList.add("close");
    ma.classList.remove("open");
    team.classList.add("open");
    team.classList.remove("close");
    foot.classList.add("open");
    foot.classList.remove("close");
    foot.style.display="block";
    }
});
el.addEventListener("click",(e)=>{
    // console.log(e.path);
    if(!e.target.classList.contains("members") && !e.target.classList.contains("a") && !e.target.classList.contains("name"))
    {
    console.log(e);
    el.classList.add("close");
    el.classList.remove("open");
    team.classList.add("open");
    team.classList.remove("close");
    foot.classList.add("open");
    foot.classList.remove("close");
    foot.style.display="block";
    }
});
modal.addEventListener("click",(e)=>{
    if(e.target.classList.contains("modal"))
    {
    modal.classList.add("close");
    modal.classList.remove("open");
    // team.style.opacity=1;
    // subteams.style.pacity=1;
    // foot.classList.add("open");
    // foot.classList.remove("close");
    if(currclick=="me")
        {
        me.classList.add("open");
        me.classList.remove("close");
        }
        if(currclick=="ma")
        {
        ma.classList.add("open");
        ma.classList.remove("close");
        }
        if(currclick=="el")
        {
        el.classList.add("open");
        el.classList.remove("close");
        }
    }
});
