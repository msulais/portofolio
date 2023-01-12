import styles from '../styles/end.module.scss';
export default function End(){
  return (
    <div className={styles.page} id="end">
      <div className={styles.decorator}>
        <div className={styles.decoratorLine}></div>
        <div className={styles.decoratorIcon}>
          <span translate='no' className="material-symbols-outlined">check_circle</span>
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <h1>Penutup</h1>
          <div className={styles.scrollableX}>
<pre className={styles.pythonCode}>
{`# main.py
firstName = input("Nama depan   : ")
lastName  = input("Nama belakang: ")
fullName  = f"{firstName} {lastName}"

print(f"Nama lengkap : {fullName}\\n")

if fullName == "Muhammad Sulais":
  print("Itu aku :D")
else:
  print("Bukan aku :/")`}</pre></div>
          <div className={styles.scrollableX}>
<pre className={styles.outputCode}>
{`$ python main.py
Nama depan   : Muhammad
Nama belakang: Sulais
Nama lengkap : Muhammad Sulais

Itu aku :D`}</pre></div>
        </div>
      </div>
    </div>
  )
}