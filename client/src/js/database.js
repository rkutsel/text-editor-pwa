import { openDB } from "idb";

const initdb = async () =>
	openDB("jate", 1, {
		upgrade(db) {
			if (db.objectStoreNames.contains("jate")) {
				return;
			}
			db.createObjectStore("jate", { keyPath: "id", autoIncrement: false });
		},
	});

export const putDb = async (content) => {
	console.log("Database PUT");
	const jateDb = await openDB("jate", 1);
	const tx = jateDb.transaction("jate", "readwrite");
	const store = tx.objectStore("jate");
	const request = store.put({ id: 1, jate: content });
	const result = await request;
	return result;
};

export const getDb = async () => {
	console.log("GET all from the database");
	const jateDb = await openDB("jate", 1);
	const tx = jateDb.transaction("jate", "readonly");
	const store = tx.objectStore("jate");
	const request = store.get(1);
	const result = await request;
	if (result) {
		return result.jate;
	}
};

initdb();
