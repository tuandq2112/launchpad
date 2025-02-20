import { useMemo } from 'react';
import { create } from "ipfs-http-client";
import { useApplicationContext } from '../context/applicationContext';

// returns null on errors
export const useIPFS = () => {

  const {
    domainSettings: {
      ipfsInfuraProjectId,
      ipfsInfuraProjectSecret,
    }
  } = useApplicationContext();

  const projectId = "3e31b3e72c8c4e798f5a2a61cf0ec50e"
  const projectSecret = "cf8d05aac75b4427975f16928b23d8a7"

  return useMemo(() => {

    try {
      const client = create({ url: "https://ipfs.bonheo.store/api/v0" });

      return client;
    } catch (error) {
      console.error('Failed to get IFPS', error)
      return null
    }
  }, [projectId, projectSecret])
}