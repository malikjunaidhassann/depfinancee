// services/Auth.tsx
import { auth, db } from '../firebase'
import {
  collection,
  addDoc,
  doc,
  setDoc,
  getDoc,
  query,
  where,
  onSnapshot,
  getDocs,
} from 'firebase/firestore'
import { signOut, User } from 'firebase/auth'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  updatePhoneNumber,
  sendEmailVerification,
  sendPasswordResetEmail,
} from 'firebase/auth'
import { useDispatch } from 'react-redux'

// Define interfaces for your data
interface UserDetails {
  [key: string]: any
}

interface UserProfileData {
  displayName?: string | null
  photoURL?: string | null
}

interface DocData {
  [key: string]: any
}

interface LoanData {
  id: string
  data: DocData
}

// create user with email and password then update profile
export const createAccount = async (
  email: string,
  password: string,
  data: UserProfileData,
  userDetails: UserDetails
) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const userId = userCredential.user.uid
    const userData = {
      ...userDetails,
      uid: userId,
    }
    await updateProfile(auth.currentUser as User, data)

    // send email verification
    await sendEmailVerification(auth.currentUser as User)
      .then(() => {
        return {
          message: 'Email verification sent',
        }
      })
      .catch((err) => {
        console.log(err)
        return {
          message: 'email verification failed',
        }
      })

    await setDoc(doc(db, 'users', userId), userData)

    return userCredential
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

export const userLogin = async (email: string, password: string) => {
  try {
    const user = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

export const LogOut = async () => {
  try {
    await signOut(auth)
  } catch (error) {
    console.log(error)
  }
  return {
    error: 'Something went wrong',
  }
}

// reset password
export const resetPassword = async (email: string) => {
  try {
    const user = await sendPasswordResetEmail(auth, email).then(() => {
      return {
        message: 'Password reset email sent',
      }
    })

    return user
  } catch (error) {
    console.log(error)
    return {
      error: 'Something went wrong',
    }
  }
}

// get data from firestore
export const getData = async (uid: string) => {
  try {
    const docRef = doc(db, 'users', uid)
    const docSnapshot = await getDoc(docRef)
    if (docSnapshot.exists()) {
      return docSnapshot.data()
    } else {
      console.log('No such document!')
      // auth.signOut();
      return {
        data: [],
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

// submit loan application
export const applyForLoan = async (uid: string, loan_type: string, data: DocData) => {
  try {
    let docRef = doc(db, loan_type, uid)
    const docSnapshot = await getDoc(docRef)
    if (!docSnapshot.exists()) {
      await setDoc(doc(db, loan_type, uid), data)
      return {
        message: 'Loan application submitted',
      }
    } else {
      return {
        message: 'Loan application already submitted',
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

// get documents from firestore
export const getApplications = async (uid: string) => {
  try {
    let docRef = doc(db, 'Business loan', uid)
    let personalDocRef = doc(db, 'Personal loan', uid)
    let consolidationDocRef = doc(db, 'Consolidation loan', uid)
    let mortageDocRef = doc(db, 'Mortage loan', uid)
    let generalDocRef = doc(db, 'General loan', uid)

    const docSnapshot = await getDoc(docRef)
    const personalDocSnapshot = await getDoc(personalDocRef)
    const consolidationDocSnapshot = await getDoc(consolidationDocRef)
    const mortageDocSnapshot = await getDoc(mortageDocRef)
    const generalDocSnapshot = await getDoc(generalDocRef)

    if (
      docSnapshot.exists() ||
      personalDocSnapshot.exists() ||
      consolidationDocSnapshot.exists() ||
      mortageDocSnapshot.exists() ||
      generalDocSnapshot.exists()
    ) {
      const data = {
        business: {
          id: docSnapshot.id,
          data: docSnapshot.data(),
        },
        personal: {
          id: personalDocSnapshot.id,
          data: personalDocSnapshot.data(),
        },
        consolidation: {
          id: consolidationDocSnapshot.id,
          data: consolidationDocSnapshot.data(),
        },
        mortage: {
          id: mortageDocSnapshot.id,
          data: mortageDocSnapshot.data(),
        },

        general: {
          id: generalDocSnapshot.id,
          data: generalDocSnapshot.data() ?? [],
        },
      }

      return {
        data,
      }
    } else {
      return {
        data: [],
      }
    }
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

export const getLoanApplications = async (uid: string) => {
  try {
    let businessDocRef = collection(db, 'Business loan')
    let personalDocRef = collection(db, 'Business loan')
    let consolidationDocRef = collection(db, 'Consolidation loan')
    let mortageDocRef = collection(db, 'Mortage loan')
    let generalDocRef = collection(db, 'General loan')

    const personalQuery = query(personalDocRef, where('uid', '==', uid))
    const businessQuery = query(businessDocRef, where('uid', '==', uid))
    const consolidationQuery = query(consolidationDocRef, where('uid', '==', uid))
    const mortageQuery = query(mortageDocRef, where('uid', '==', uid))
    const generalQuery = query(generalDocRef, where('uid', '==', uid))

    let personalQuerySnapshot = await getDocs(personalQuery)
    let businessQuerySnapshot = await getDocs(businessQuery)
    let consolidationQuerySnapshot = await getDocs(consolidationQuery)
    let mortageQuerySnapshot = await getDocs(mortageQuery)
    let generalQuerySnapshot = await getDocs(generalQuery)

    if (personalQuerySnapshot.empty) {
      return {
        data: [],
      }
    }

    let Personaldata: LoanData[] = []
    personalQuerySnapshot.forEach((doc) => {
      Personaldata.push({
        id: doc.id,
        data: doc.data(),
      })
    })

    const data = {
      personal: personalQuerySnapshot.empty ? [] : Personaldata,
    }
    return {
      data,
    }
  } catch (error) {
    console.log(error)
  }

  return {
    error: 'Something went wrong',
  }
}

export const getLoans = async (loan_type: string, uid: string) => {
  try {
    const citiesRef = collection(db, loan_type)

    const q = query(citiesRef, where('uid', '==', uid))
    let querySnapshot = await getDocs(q)
    if (querySnapshot.empty) {
      return {
        data: [],
      }
    }
    let data: LoanData[] = []
    querySnapshot.forEach((doc) => {
      data.push({
        id: doc.id,
        data: doc.data(),
      })
    })
    return {
      data,
    }
  } catch (error) {
    console.log(error)
  }
}

// create new documents and delete old documents
export const DeleteDocuments = async (uid: string) => {}