function constructionCrew(worker){
    if(worker.dizziness){
        worker.levelOfHydrated += 0.1 * worker.experience * worker.weight;
    }
    worker.dizziness = false;
    console.log(worker);
    return worker;
}

//Test Cases
constructionCrew({ weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true });
constructionCrew({ weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true });
constructionCrew({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false });