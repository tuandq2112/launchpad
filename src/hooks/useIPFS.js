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
    if (!projectId || !projectSecret) return null;

    try {

      return create({
        host: "14.225.254.58:5001",
        port: 5001,
        protocol: "http",

      });
    } catch (error) {
      console.error('Failed to get IFPS', error)
      return null
    }
  }, [projectId, projectSecret])
}