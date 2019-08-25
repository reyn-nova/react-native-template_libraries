import Realm from 'realm'

export async function OpenRealm(name) {
    let realm = await Realm.open(RealmDataModel[name])

    return {
        name: RealmDataName[name],
        realm: realm,
    }
}

const RealmDataName = {
    Number: "number",
}

const RealmDataModel = {
    Number: {
        path: "number.realm",
        schema: [{
            name: RealmDataName.Number,
            properties: {
                value: "int",
            },
        }],
    },
}